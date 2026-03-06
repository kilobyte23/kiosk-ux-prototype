import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { PromotionCard } from '../homeIdleData';

interface PromotionalCarouselProps {
  items: PromotionCard[];
}

const AUTO_ADVANCE_MS = 6_200;
const INTERACTION_PAUSE_MS = 9_000;
const SWIPE_THRESHOLD_PX = 42;

const PROMO_IMAGES_BY_ID: Record<string, string> = {
  saver: '/idle-promos/batteryswap1.jpg',
  fleet: '/idle-promos/batteryswap2.jpg',
  rescue: '/idle-promos/batteryswap3.jpg',
};

const PROMO_IMAGE_FALLBACK = [
  '/idle-promos/batteryswap1.jpg',
  '/idle-promos/batteryswap2.jpg',
  '/idle-promos/batteryswap3.jpg',
];

function getImageForSlide(item: PromotionCard, index: number) {
  return PROMO_IMAGES_BY_ID[item.id] ?? PROMO_IMAGE_FALLBACK[index % PROMO_IMAGE_FALLBACK.length];
}

function getDirection(currentIndex: number, targetIndex: number, total: number): 'next' | 'prev' {
  const forward = (targetIndex - currentIndex + total) % total;
  const backward = (currentIndex - targetIndex + total) % total;
  return forward <= backward ? 'next' : 'prev';
}

export default function PromotionalCarousel({ items }: PromotionalCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [lastInteractionAt, setLastInteractionAt] = useState(0);
  const clearLeavingTimerRef = useRef<number | null>(null);
  const pointerStartXRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  const clearLeavingState = useCallback(() => {
    if (clearLeavingTimerRef.current) {
      window.clearTimeout(clearLeavingTimerRef.current);
      clearLeavingTimerRef.current = null;
    }

    clearLeavingTimerRef.current = window.setTimeout(() => {
      setPreviousIndex(null);
      clearLeavingTimerRef.current = null;
    }, 760);
  }, []);

  const commitSlideChange = useCallback((nextIndex: number, travelDirection: 'next' | 'prev', userTriggered: boolean) => {
    if (items.length <= 1 || nextIndex === activeIndex) {
      if (userTriggered) {
        setLastInteractionAt(Date.now());
      }
      return;
    }

    setDirection(travelDirection);
    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
    clearLeavingState();

    if (userTriggered) {
      setLastInteractionAt(Date.now());
    }
  }, [activeIndex, clearLeavingState, items.length]);

  const goNext = useCallback((userTriggered = false) => {
    if (items.length <= 1) {
      return;
    }

    commitSlideChange((activeIndex + 1) % items.length, 'next', userTriggered);
  }, [activeIndex, commitSlideChange, items.length]);

  const goPrevious = useCallback((userTriggered = false) => {
    if (items.length <= 1) {
      return;
    }

    commitSlideChange((activeIndex - 1 + items.length) % items.length, 'prev', userTriggered);
  }, [activeIndex, commitSlideChange, items.length]);

  useEffect(() => {
    if (items.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      if (Date.now() - lastInteractionAt < INTERACTION_PAUSE_MS) {
        return;
      }

      goNext();
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, [goNext, items.length, lastInteractionAt]);

  useEffect(() => () => {
    if (clearLeavingTimerRef.current) {
      window.clearTimeout(clearLeavingTimerRef.current);
    }
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="promo-card kiosk-panel kiosk-panel--soft" aria-label="Promotions">
      <div
        className="promo-card__viewport"
        onPointerDown={(event) => {
          if (event.pointerType === 'mouse') {
            return;
          }

          pointerStartXRef.current = event.clientX;
          pointerIdRef.current = event.pointerId;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => {
          if (pointerIdRef.current !== event.pointerId || pointerStartXRef.current === null) {
            return;
          }

          const deltaX = event.clientX - pointerStartXRef.current;
          pointerStartXRef.current = null;
          pointerIdRef.current = null;
          event.currentTarget.releasePointerCapture(event.pointerId);

          if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) {
            return;
          }

          if (deltaX < 0) {
            goNext(true);
          } else {
            goPrevious(true);
          }
        }}
        onPointerCancel={() => {
          pointerStartXRef.current = null;
          pointerIdRef.current = null;
        }}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isLeaving = index === previousIndex;

          return (
            <article
              key={item.id}
              className={`promo-card__slide promo-card__slide--${direction} ${isActive ? 'is-active' : ''} ${isLeaving ? 'is-leaving' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                className="promo-card__image"
                src={getImageForSlide(item, index)}
                alt={item.title}
                draggable={false}
              />
              <div className="promo-card__overlay" aria-hidden="true" />
              <div className="promo-card__content">
                <span className="promo-card__eyebrow" style={{ '--promo-accent': item.accent } as CSSProperties}>
                  {item.eyebrow}
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="promo-card__badge">{item.badge}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="promo-card__dots" role="tablist" aria-label="Promotion options">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${item.eyebrow}`}
            className={`promo-card__dot ${index === activeIndex ? 'is-active' : ''}`}
            onClick={() => {
              commitSlideChange(index, getDirection(activeIndex, index, items.length), true);
            }}
          >
            <span className="promo-card__dot-fill" aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}
