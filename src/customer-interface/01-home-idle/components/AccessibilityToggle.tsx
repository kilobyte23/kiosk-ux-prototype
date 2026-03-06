import { Eye, SpeakerHigh, TextAa } from '@phosphor-icons/react';
import type { AccessibilityState } from '../homeIdleData';

interface AccessibilityToggleProps {
  label: string;
  highContrastLabel: string;
  largeTextLabel: string;
  screenReaderLabel: string;
  state: AccessibilityState;
  onToggle: (key: keyof AccessibilityState) => void;
}

export default function AccessibilityToggle({
  highContrastLabel,
  label,
  largeTextLabel,
  onToggle,
  screenReaderLabel,
  state,
}: AccessibilityToggleProps) {
  return (
    <div className="utility-section utility-section--stacked">
      <span className="utility-label">{label}</span>
      <div className="utility-chip-row utility-chip-row--accessibility">
        <button
          className={`utility-button ${state.highContrast ? 'active' : ''}`}
          onClick={() => onToggle('highContrast')}
          aria-pressed={state.highContrast}
        >
          <Eye size={16} weight="bold" />
          <span>{highContrastLabel}</span>
        </button>

        <button
          className={`utility-button ${state.largeText ? 'active' : ''}`}
          onClick={() => onToggle('largeText')}
          aria-pressed={state.largeText}
        >
          <TextAa size={16} weight="bold" />
          <span>{largeTextLabel}</span>
        </button>

        <button
          className={`utility-button ${state.screenReader ? 'active' : ''}`}
          onClick={() => onToggle('screenReader')}
          aria-pressed={state.screenReader}
        >
          <SpeakerHigh size={16} weight="bold" />
          <span>{screenReaderLabel}</span>
        </button>
      </div>
    </div>
  );
}
