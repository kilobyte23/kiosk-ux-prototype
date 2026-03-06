import './KioskShell.css';
import { BatteryFull, WarningCircle, WifiHigh, WifiLow, WifiSlash } from '@phosphor-icons/react';

interface KioskShellProps {
  children: React.ReactNode;
  stationName: string;
  time: string;
  hasError?: boolean;
  connectivity: 'online' | 'degraded' | 'offline';
  supportText: string;
  availabilityText: string;
  footerActions?: React.ReactNode;
  onClockTripleClick?: () => void;
  overlay?: React.ReactNode;
}

export default function KioskShell({
  availabilityText,
  children,
  connectivity,
  footerActions,
  hasError = false,
  onClockTripleClick,
  overlay,
  stationName,
  supportText,
  time,
}: KioskShellProps) {
  const ConnectivityIcon = connectivity === 'offline'
    ? WifiSlash
    : connectivity === 'degraded'
      ? WifiLow
      : WifiHigh;

  const connectivityLabel = connectivity === 'online'
    ? 'Online'
    : connectivity === 'degraded'
      ? 'Retrying'
      : 'Offline';

  return (
    <div className="kiosk-hardware-bezel">
      <div className="kiosk-screen-viewport">
        <div className={`kiosk-status-bar ${hasError ? 'status-error' : ''}`}>
          <div className="status-left">
            <span className="station-name">{stationName}</span>
          </div>
          <div className="status-center">
            {hasError && <WarningCircle size={16} weight="fill" className="error-icon" />}
            <button
              type="button"
              className="clock-trigger"
              onClick={(event) => {
                if (event.detail === 3) {
                  onClockTripleClick?.();
                }
              }}
              aria-label="Clock and simulation toggle"
            >
              <span className="clock">{time}</span>
            </button>
          </div>
          <div className="status-right">
            <span className={`connectivity-pill connectivity-pill--${connectivity}`}>
              <ConnectivityIcon size={16} weight="bold" />
              <small>{connectivityLabel}</small>
            </span>
            <span className="availability-pill">
              <BatteryFull size={18} weight="fill" />
              <small>{availabilityText}</small>
            </span>
          </div>
        </div>

        {overlay && <div className="kiosk-overlay">{overlay}</div>}

        <div className="kiosk-main-content">{children}</div>

        <div className="kiosk-bottom-bar">
          <div className="help-text">
            <span>{supportText}</span>
          </div>
          <div className="kiosk-bottom-right">
            {footerActions && <div className="kiosk-footer-actions">{footerActions}</div>}
            <div className="version-info">v2.4.1-rc3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
