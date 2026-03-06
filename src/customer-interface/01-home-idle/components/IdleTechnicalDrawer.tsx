import { useState } from 'react';
import {
  ArrowsClockwise,
  CaretDown,
  ClockCounterClockwise,
  CloudArrowUp,
  Database,
  Queue,
  ShieldCheck,
  WarningCircle,
  Waveform,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import type { LocalizedCopy, SimulationMode, TelemetryState } from '../homeIdleData';
import './IdleTechnicalDrawer.css';

interface IdleTechnicalDrawerProps {
  copy: LocalizedCopy;
  simulationMode: SimulationMode;
  telemetry: TelemetryState;
}

interface ServiceCapability {
  key: string;
  icon: Icon;
  label: string;
  stateLabel: string;
  tone: 'active' | 'limited' | 'paused';
}

export default function IdleTechnicalDrawer({
  copy,
  simulationMode,
  telemetry,
}: IdleTechnicalDrawerProps) {
  const [open, setOpen] = useState(false);

  const telemetrySeed = (
    telemetry.availableBatteries * 13
    + telemetry.offlineQueue * 17
    + telemetry.baysInService * 7
    + telemetry.etaMinutes * 11
    + (telemetry.connectivity === 'online' ? 3 : telemetry.connectivity === 'degraded' ? 5 : 9)
  );

  const queueText = telemetry.offlineQueue > 0
    ? `${telemetry.offlineQueue} ${copy.queueLabel}`
    : copy.queueEmpty;

  const queueFlushMinutes = telemetry.offlineQueue === 0
    ? 0
    : Math.max(
      1,
      Math.round(
        telemetry.offlineQueue
          * (telemetry.connectivity === 'online' ? 0.6 : telemetry.connectivity === 'degraded' ? 1.3 : 2.4),
      ),
    );

  const queueProgress = Math.max(0, Math.min(100, 100 - (telemetry.offlineQueue / 18) * 100));
  const lastSyncMinutes = telemetry.connectivity === 'online'
    ? 1 + (telemetrySeed % 3)
    : telemetry.connectivity === 'degraded'
      ? 3 + (telemetrySeed % 8)
      : 8 + (telemetrySeed % 27);

  const replayRate = telemetry.connectivity === 'online'
    ? `${16 + (telemetrySeed % 9)}/min`
    : telemetry.connectivity === 'degraded'
      ? `${7 + (telemetrySeed % 6)}/min`
      : `${2 + (telemetrySeed % 4)}/min`;

  const networkMetrics = telemetry.connectivity === 'online'
    ? {
      quality: 'Strong',
      rtt: `${22 + (telemetrySeed % 22)} ms`,
      packetLoss: `${(0.1 + (telemetrySeed % 4) * 0.1).toFixed(1)}%`,
      jitter: `${4 + (telemetrySeed % 8)} ms`,
      backhaul: 'Fiber primary',
      heartbeat: `${4 + (telemetrySeed % 5)}s heartbeat`,
    }
    : telemetry.connectivity === 'degraded'
      ? {
        quality: 'Unstable',
        rtt: `${130 + (telemetrySeed % 95)} ms`,
        packetLoss: `${(1.9 + (telemetrySeed % 11) * 0.35).toFixed(1)}%`,
        jitter: `${24 + (telemetrySeed % 30)} ms`,
        backhaul: 'LTE failover',
        heartbeat: `${11 + (telemetrySeed % 15)}s heartbeat`,
      }
      : {
        quality: 'Unavailable',
        rtt: 'No response',
        packetLoss: '100%',
        jitter: '--',
        backhaul: 'Local cache only',
        heartbeat: 'Heartbeat lost',
      };

  const serviceCapabilities: ServiceCapability[] = [
    {
      key: 'cloud-sync',
      icon: CloudArrowUp,
      label: 'Cloud Sync',
      stateLabel: telemetry.connectivity === 'online' ? 'Active' : telemetry.connectivity === 'degraded' ? 'Buffered' : 'Paused',
      tone: telemetry.connectivity === 'online' ? 'active' : telemetry.connectivity === 'degraded' ? 'limited' : 'paused',
    },
    {
      key: 'auth-control',
      icon: ShieldCheck,
      label: 'Auth Control',
      stateLabel: telemetry.connectivity === 'offline' ? 'Cached' : 'Live',
      tone: telemetry.connectivity === 'offline' ? 'limited' : 'active',
    },
    {
      key: 'inventory',
      icon: Database,
      label: 'Inventory Feed',
      stateLabel: telemetry.connectivity === 'online' ? 'Live' : telemetry.connectivity === 'degraded' ? 'Lagged' : 'Snapshot',
      tone: telemetry.connectivity === 'online' ? 'active' : telemetry.connectivity === 'degraded' ? 'limited' : 'paused',
    },
    {
      key: 'payments',
      icon: ArrowsClockwise,
      label: 'Payment Relay',
      stateLabel: telemetry.connectivity === 'online' ? 'Live' : telemetry.connectivity === 'degraded' ? 'Deferred' : 'Queued',
      tone: telemetry.connectivity === 'online' ? 'active' : 'limited',
    },
  ];

  const activeServiceCount = serviceCapabilities.filter((capability) => capability.tone === 'active').length;
  const limitedServiceCount = serviceCapabilities.filter((capability) => capability.tone === 'limited').length;

  return (
    <div className={`idle-techdrawer ${open ? 'is-open' : ''}`}>
      <button
        className="idle-techdrawer__trigger"
        onClick={() => setOpen((currentOpen) => !currentOpen)}
        aria-expanded={open}
        aria-controls="idle-techdrawer-panel"
        aria-label="Toggle technical details"
      >
        <Waveform className="idle-techdrawer__trigger-icon" size={15} weight="bold" />
        <span className="idle-techdrawer__trigger-label">Technical details</span>
        <CaretDown className="idle-techdrawer__trigger-caret" size={16} weight="bold" />
      </button>

      <section
        id="idle-techdrawer-panel"
        className="idle-techdrawer__panel"
        aria-hidden={!open}
      >
        <div className="idle-techdrawer__meta">
          {telemetry.connectivity !== 'online' && (
            <span className="idle-techdrawer__incident">
              <WarningCircle size={14} weight="fill" />
              <span>
                {telemetry.connectivity === 'degraded'
                  ? 'Reduced cloud reachability'
                  : 'Cloud link unavailable'}
              </span>
            </span>
          )}
          {simulationMode === 'manual' && (
            <span className="idle-techdrawer__mode">
              <Waveform size={14} weight="bold" />
              <span>Pinned by simulation</span>
            </span>
          )}
        </div>

        <div className="idle-techdrawer__grid">
          <article className="idle-techdrawer__card">
            <header className="idle-techdrawer__card-header">
              <small>Network diagnostics</small>
              <strong>{`${networkMetrics.rtt} RTT • ${networkMetrics.jitter} jitter`}</strong>
            </header>
            <div className="idle-techdrawer__metric-grid">
              <article>
                <span>Quality</span>
                <strong>{networkMetrics.quality}</strong>
              </article>
              <article>
                <span>Round-trip</span>
                <strong>{networkMetrics.rtt}</strong>
              </article>
              <article>
                <span>Packet loss</span>
                <strong>{networkMetrics.packetLoss}</strong>
              </article>
              <article>
                <span>Jitter</span>
                <strong>{networkMetrics.jitter}</strong>
              </article>
              <article>
                <span>Backhaul</span>
                <strong>{networkMetrics.backhaul}</strong>
              </article>
              <article>
                <span>Heartbeat</span>
                <strong>{networkMetrics.heartbeat}</strong>
              </article>
            </div>
          </article>

          <article className="idle-techdrawer__card">
            <header className="idle-techdrawer__card-header">
              <small>Service systems</small>
              <strong>{`${activeServiceCount} active • ${limitedServiceCount} limited`}</strong>
            </header>
            <div className="idle-techdrawer__chip-column">
              {serviceCapabilities.map((capability) => (
                <span
                  key={capability.key}
                  className={`idle-techdrawer__service-chip idle-techdrawer__service-chip--${capability.tone}`}
                >
                  <small>
                    <capability.icon size={13} weight="bold" />
                    {capability.label}
                  </small>
                  <strong>{capability.stateLabel}</strong>
                </span>
              ))}
            </div>
          </article>

          <article className="idle-techdrawer__card">
            <header className="idle-techdrawer__card-header">
              <small>Sync pipeline</small>
              <strong>{`${queueText} • replay ${replayRate}`}</strong>
            </header>
            <div className="idle-techdrawer__queue-head">
              <span>
                <Queue size={14} weight="bold" />
                {queueText}
              </span>
              <span>
                <ClockCounterClockwise size={13} weight="bold" />
                {`Replay ${replayRate}`}
              </span>
            </div>
            <div className="idle-techdrawer__queue-progress" aria-hidden="true">
              <span style={{ width: `${queueProgress}%` }} />
            </div>
            <p className="idle-techdrawer__queue-note">
              {telemetry.offlineQueue === 0
                ? `Last cloud commit ${lastSyncMinutes} min ago.`
                : `Estimated queue drain: ${queueFlushMinutes} min when backhaul stabilizes.`}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
