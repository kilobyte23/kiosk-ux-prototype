import { CheckCircle, Toolbox, WarningCircle } from '@phosphor-icons/react';
import type { LocalizedCopy, TelemetryState } from '../homeIdleData';
import { getStatusBannerCopy } from '../homeIdleData';

interface StationStatusBannerProps {
  copy: LocalizedCopy;
  telemetry: TelemetryState;
}

export default function StationStatusBanner({ copy, telemetry }: StationStatusBannerProps) {
  const bannerCopy = getStatusBannerCopy(copy, telemetry);
  const compact = telemetry.operationalStatus === 'online';
  const Icon = telemetry.operationalStatus === 'maintenance'
    ? Toolbox
    : telemetry.operationalStatus === 'partial'
      ? WarningCircle
      : CheckCircle;

  return (
    <article className={`station-status-banner station-status-banner--${telemetry.operationalStatus} ${compact ? 'station-status-banner--compact' : ''}`}>
      <div className="station-status-banner__icon">
        <Icon size={20} weight="fill" />
      </div>

      <div className="station-status-banner__body">
        <span className="station-status-banner__label">{bannerCopy.label}</span>
        <strong className="station-status-banner__title">{bannerCopy.title}</strong>
        {!compact && <p className="station-status-banner__message">{bannerCopy.message}</p>}
      </div>
    </article>
  );
}
