import { useState } from 'react';
import { PhoneCall, WarningCircle } from '@phosphor-icons/react';
import type { LocalizedCopy } from '../homeIdleData';

interface EmergencyHelplineProps {
  announce: (message: string) => void;
  copy: LocalizedCopy;
  emergencyNumber: string;
  etaMinutes: number;
  supportNumber: string;
}

function toDialString(phoneNumber: string) {
  return phoneNumber.replace(/[^\d+]/g, '');
}

export default function EmergencyHelpline({
  announce,
  copy,
  emergencyNumber,
  etaMinutes,
  supportNumber,
}: EmergencyHelplineProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className={`emergency-helpline ${expanded ? 'is-open' : ''}`}>
      <button
        className="emergency-helpline__toggle"
        type="button"
        onClick={() => {
          const nextExpanded = !expanded;
          setExpanded(nextExpanded);
          if (nextExpanded) {
            announce(copy.emergencyDetail);
          }
        }}
        aria-expanded={expanded}
      >
        <WarningCircle size={18} weight="fill" />
        <span>{copy.emergencySticky}</span>
      </button>

      {expanded && (
        <div className="emergency-helpline__panel kiosk-panel">
          <div className="emergency-helpline__header">
            <span className="utility-label">{copy.emergencyLabel}</span>
            <strong>{copy.emergencyTitle}</strong>
          </div>
          <p>{copy.emergencyDetail}</p>
          <div className="emergency-helpline__numbers">
            <span>{emergencyNumber}</span>
            <small>{supportNumber}</small>
          </div>
          <div className="emergency-helpline__footer">
            <span>{copy.emergencyOperatorEta}: {etaMinutes || 2} min</span>
            <a
              className="emergency-helpline__call"
              href={`tel:${toDialString(emergencyNumber)}`}
            >
              <PhoneCall size={16} weight="bold" />
              <span>{copy.emergencyCallNow}</span>
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}
