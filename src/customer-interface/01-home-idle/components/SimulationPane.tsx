import { HandPalm, SlidersHorizontal, X } from '@phosphor-icons/react';
import type {
  ConnectivityMode,
  OperationalStatus,
  PowerMode,
  TelemetryState,
} from '../homeIdleData';
import './SimulationPane.css';

interface SimulationPaneProps {
  onClose: () => void;
  onTelemetryChange: (patch: Partial<TelemetryState>) => void;
  telemetry: TelemetryState;
}

function toNumber(value: string, fallback: number) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    return fallback;
  }

  return parsed;
}

export default function SimulationPane({
  onClose,
  onTelemetryChange,
  telemetry,
}: SimulationPaneProps) {
  return (
    <aside className="simulation-pane kiosk-panel" role="dialog" aria-label="Simulation controls">
      <header className="simulation-pane__header">
        <span className="simulation-pane__title">
          <SlidersHorizontal size={16} weight="bold" />
          <strong>Simulation Controls</strong>
        </span>
        <button
          type="button"
          className="simulation-pane__close"
          onClick={onClose}
          aria-label="Close simulation controls"
        >
          <X size={14} weight="bold" />
        </button>
      </header>

      <span className="simulation-pane__status">
        <HandPalm size={14} weight="bold" />
        <span>Manual control active</span>
      </span>

      <p className="simulation-pane__note">Telemetry stays pinned at nominal until changed here.</p>

      <div className="simulation-pane__grid">
        <label>
          <span>Availability</span>
          <input
            type="number"
            min={0}
            max={telemetry.totalBatteries}
            value={telemetry.availableBatteries}
            onChange={(event) => {
              onTelemetryChange({
                availableBatteries: toNumber(event.target.value, telemetry.availableBatteries),
              });
            }}
          />
        </label>

        <label>
          <span>Ambient °C</span>
          <input
            type="number"
            step={0.1}
            value={telemetry.ambientTempC}
            onChange={(event) => {
              onTelemetryChange({
                ambientTempC: toNumber(event.target.value, telemetry.ambientTempC),
              });
            }}
          />
        </label>

        <label>
          <span>Cabinet °C</span>
          <input
            type="number"
            step={0.1}
            value={telemetry.cabinetTempC}
            onChange={(event) => {
              onTelemetryChange({
                cabinetTempC: toNumber(event.target.value, telemetry.cabinetTempC),
              });
            }}
          />
        </label>

        <label>
          <span>Connectivity</span>
          <select
            value={telemetry.connectivity}
            onChange={(event) => {
              onTelemetryChange({
                connectivity: event.target.value as ConnectivityMode,
              });
            }}
          >
            <option value="online">Online</option>
            <option value="degraded">Degraded</option>
            <option value="offline">Offline</option>
          </select>
        </label>

        <label>
          <span>Status</span>
          <select
            value={telemetry.operationalStatus}
            onChange={(event) => {
              onTelemetryChange({
                operationalStatus: event.target.value as OperationalStatus,
              });
            }}
          >
            <option value="online">Online</option>
            <option value="partial">Partial</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </label>

        <label>
          <span>Power mode</span>
          <select
            value={telemetry.powerMode}
            onChange={(event) => {
              onTelemetryChange({
                powerMode: event.target.value as PowerMode,
              });
            }}
          >
            <option value="solarHybrid">Solar + grid</option>
            <option value="gridPriority">Grid priority</option>
            <option value="batteryBuffer">Battery buffer</option>
            <option value="serviceBackup">Service backup</option>
          </select>
        </label>

        <label>
          <span>Queued syncs</span>
          <input
            type="number"
            min={0}
            value={telemetry.offlineQueue}
            onChange={(event) => {
              onTelemetryChange({
                offlineQueue: toNumber(event.target.value, telemetry.offlineQueue),
              });
            }}
          />
        </label>

        <label>
          <span>Bays in service</span>
          <input
            type="number"
            min={0}
            max={12}
            value={telemetry.baysInService}
            onChange={(event) => {
              onTelemetryChange({
                baysInService: toNumber(event.target.value, telemetry.baysInService),
              });
            }}
          />
        </label>

        <label>
          <span>ETA minutes</span>
          <input
            type="number"
            min={0}
            value={telemetry.etaMinutes}
            onChange={(event) => {
              onTelemetryChange({
                etaMinutes: toNumber(event.target.value, telemetry.etaMinutes),
              });
            }}
          />
        </label>
      </div>
    </aside>
  );
}
