import StationStatusBanner from '../components/StationStatusBanner';
import { useHomeIdle } from '../HomeIdleContext';
import type { TelemetryState } from '../homeIdleData';
import './IdleAttractScreen.css';

function createPreviewTelemetry(baseTelemetry: TelemetryState, status: TelemetryState['operationalStatus']): TelemetryState {
  if (status === 'maintenance') {
    return {
      ...baseTelemetry,
      operationalStatus: 'maintenance',
      connectivity: 'degraded',
      availableBatteries: 0,
      baysInService: 1,
      etaMinutes: 16,
    };
  }

  if (status === 'partial') {
    return {
      ...baseTelemetry,
      operationalStatus: 'partial',
      connectivity: 'offline',
      availableBatteries: Math.min(baseTelemetry.availableBatteries, 5),
      baysInService: 8,
      etaMinutes: 5,
    };
  }

  return {
    ...baseTelemetry,
    operationalStatus: 'online',
    connectivity: 'online',
    availableBatteries: Math.max(baseTelemetry.availableBatteries, 12),
    baysInService: 12,
    etaMinutes: 0,
  };
}

export default function StationStatusScreen() {
  const { copy, telemetry } = useHomeIdle();

  const previews: TelemetryState[] = [
    createPreviewTelemetry(telemetry, 'online'),
    createPreviewTelemetry(telemetry, 'partial'),
    createPreviewTelemetry(telemetry, 'maintenance'),
  ];

  return (
    <div className="station-status-screen">
      <section className="station-status-screen__panel kiosk-panel">
        <div className="station-status-screen__intro">
          <span className="utility-label">{copy.connectivityLabel}</span>
          <h1>{copy.stationReady}</h1>
          <p>{copy.statusOnline.message}</p>
        </div>

        <div className="station-status-screen__grid">
          {previews.map((preview) => (
            <StationStatusBanner
              key={preview.operationalStatus}
              copy={copy}
              telemetry={preview}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
