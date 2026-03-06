import { ClockCounterClockwise, Lightning, Thermometer } from '@phosphor-icons/react';
import type { LocalizedCopy, TelemetryState } from '../homeIdleData';

interface StatusWidgetsProps {
  copy: LocalizedCopy;
  locale: string;
  now: Date;
  telemetry: TelemetryState;
}

export default function StatusWidgets({ copy, locale, now, telemetry }: StatusWidgetsProps) {
  const timeLabel = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(now);

  const widgets = [
    {
      icon: ClockCounterClockwise,
      label: copy.clockLabel,
      value: timeLabel,
    },
    {
      icon: Thermometer,
      label: copy.ambientLabel,
      value: `${telemetry.ambientTempC.toFixed(1)}°C`,
    },
    {
      icon: Lightning,
      label: copy.powerLabel,
      value: copy.powerModes[telemetry.powerMode],
    },
  ];

  return (
    <div className="status-widget-grid" aria-label={copy.statusWidgetsLabel}>
      {widgets.map(({ icon: Icon, label, value }) => (
        <article key={label} className="status-widget-card">
          <div className="status-widget-card__icon">
            <Icon size={18} weight="bold" />
          </div>
          <div className="status-widget-card__copy">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}
