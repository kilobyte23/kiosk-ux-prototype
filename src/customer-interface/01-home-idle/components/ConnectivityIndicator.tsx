import { Link } from 'react-router-dom';
import { CloudArrowUp, Queue, WifiHigh, WifiLow, WifiSlash } from '@phosphor-icons/react';
import type { LocalizedCopy, SimulationMode, TelemetryState } from '../homeIdleData';

interface ConnectivityIndicatorProps {
  copy: LocalizedCopy;
  simulationMode: SimulationMode;
  telemetry: TelemetryState;
}

export default function ConnectivityIndicator({
  copy,
  simulationMode,
  telemetry,
}: ConnectivityIndicatorProps) {
  const Icon = telemetry.connectivity === 'offline'
    ? WifiSlash
    : telemetry.connectivity === 'degraded'
      ? WifiLow
      : WifiHigh;

  const statusLabel = telemetry.connectivity === 'online'
    ? copy.connectivityOnline
    : telemetry.connectivity === 'degraded'
      ? copy.connectivityDegraded
      : copy.connectivityOffline;

  const queueSummary = telemetry.offlineQueue === 0
    ? 'Queue clear'
    : `${telemetry.offlineQueue} ${copy.queueLabel}`;

  return (
    <section className={`connectivity-card connectivity-card--${telemetry.connectivity} ${simulationMode === 'manual' ? 'connectivity-card--manual' : ''} kiosk-panel`}>
      <div className="connectivity-card__header">
        <div className="connectivity-card__icon">
          <Icon size={18} weight="bold" />
        </div>
        <div className="connectivity-card__copy">
          <span>{copy.connectivityLabel}</span>
          <strong>{statusLabel}</strong>
        </div>
        <span className="connectivity-card__tag">
          {telemetry.connectivity === 'online' ? 'Live sync' : 'Fallback ready'}
        </span>
      </div>

      <div className="connectivity-card__summary">
        <span className="connectivity-card__chip">
          <Queue size={14} weight="bold" />
          <span>{queueSummary}</span>
        </span>
        {telemetry.connectivity !== 'online' && (
          <span className="connectivity-card__chip connectivity-card__chip--notice">
            <CloudArrowUp size={14} weight="bold" />
            <span>Offline-safe mode</span>
          </span>
        )}
      </div>

      {telemetry.connectivity !== 'online' && (
        <div className="connectivity-card__actions">
          <Link to="/customer/auth/rfid" className="connectivity-card__action">
            {copy.fallbackRfid}
          </Link>
          <Link to="/customer/auth/guest" className="connectivity-card__action connectivity-card__action--ghost">
            {copy.fallbackGuest}
          </Link>
        </div>
      )}
    </section>
  );
}
