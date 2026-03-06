import { useState } from 'react';
import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import KioskShell from './components/KioskShell';

/* ── Customer Interface Pages ── */
import IdleAttractScreen from './customer-interface/01-home-idle/pages/IdleAttractScreen';
import StationStatusScreen from './customer-interface/01-home-idle/pages/StationStatusScreen';
import { HomeIdleProvider, useHomeIdle } from './customer-interface/01-home-idle/HomeIdleContext';
import IdleTechnicalDrawer from './customer-interface/01-home-idle/components/IdleTechnicalDrawer';
import SimulationPane from './customer-interface/01-home-idle/components/SimulationPane';
import AuthMethodSelector from './customer-interface/02-authentication/pages/AuthMethodSelector';
import QRScannerScreen from './customer-interface/02-authentication/pages/QRScannerScreen';
import NFCTapScreen from './customer-interface/02-authentication/pages/NFCTapScreen';
import MobileOTPScreen from './customer-interface/02-authentication/pages/MobileOTPScreen';
import RFIDReaderScreen from './customer-interface/02-authentication/pages/RFIDReaderScreen';
import BiometricScreen from './customer-interface/02-authentication/pages/BiometricScreen';
import GuestModeScreen from './customer-interface/02-authentication/pages/GuestModeScreen';
import AccountNotFoundScreen from './customer-interface/02-authentication/pages/AccountNotFoundScreen';
import SlotMapScreen from './customer-interface/03-battery-swap/pages/SlotMapScreen';
import BatteryInfoScreen from './customer-interface/03-battery-swap/pages/BatteryInfoScreen';
import AutoAssignScreen from './customer-interface/03-battery-swap/pages/AutoAssignScreen';
import ManualSlotSelectScreen from './customer-interface/03-battery-swap/pages/ManualSlotSelectScreen';
import SwapConfirmationScreen from './customer-interface/03-battery-swap/pages/SwapConfirmationScreen';
import SwapTimerScreen from './customer-interface/03-battery-swap/pages/SwapTimerScreen';
import PostSwapReceiptScreen from './customer-interface/03-battery-swap/pages/PostSwapReceiptScreen';
import WalletBalanceScreen from './customer-interface/04-payment-billing/pages/WalletBalanceScreen';
import CostBreakdownScreen from './customer-interface/04-payment-billing/pages/CostBreakdownScreen';
import SubscriptionBadgeScreen from './customer-interface/04-payment-billing/pages/SubscriptionBadgeScreen';
import UPIPaymentScreen from './customer-interface/04-payment-billing/pages/UPIPaymentScreen';
import OneTapConfirmScreen from './customer-interface/04-payment-billing/pages/OneTapConfirmScreen';
import PaymentFailureScreen from './customer-interface/04-payment-billing/pages/PaymentFailureScreen';
import CorporateBillingScreen from './customer-interface/04-payment-billing/pages/CorporateBillingScreen';
import TransactionHistoryScreen from './customer-interface/04-payment-billing/pages/TransactionHistoryScreen';
import TempWarningScreen from './customer-interface/05-alerts-errors-safety/pages/TempWarningScreen';
import OvertempLockoutScreen from './customer-interface/05-alerts-errors-safety/pages/OvertempLockoutScreen';
import SlotJamErrorScreen from './customer-interface/05-alerts-errors-safety/pages/SlotJamErrorScreen';
import FireSmokeOverlayScreen from './customer-interface/05-alerts-errors-safety/pages/FireSmokeOverlayScreen';
import PowerOutageScreen from './customer-interface/05-alerts-errors-safety/pages/PowerOutageScreen';
import TamperDetectionScreen from './customer-interface/05-alerts-errors-safety/pages/TamperDetectionScreen';
import PostSwapFeedbackScreen from './customer-interface/05-alerts-errors-safety/pages/PostSwapFeedbackScreen';
import HighContrastScreen from './customer-interface/06-accessibility-ux-polish/pages/HighContrastScreen';
import LargeTextScreen from './customer-interface/06-accessibility-ux-polish/pages/LargeTextScreen';
import RainGloveScreen from './customer-interface/06-accessibility-ux-polish/pages/RainGloveScreen';
import SunlightAntiglareScreen from './customer-interface/06-accessibility-ux-polish/pages/SunlightAntiglareScreen';

/* ── Admin Interface Pages ── */
import DashboardOverview from './admin-interface/01-local-dashboard/pages/DashboardOverview';
import SystemResourceMonitor from './admin-interface/01-local-dashboard/pages/SystemResourceMonitor';
import ProcessHealthPanel from './admin-interface/01-local-dashboard/pages/ProcessHealthPanel';
import HardwareIOMonitor from './admin-interface/01-local-dashboard/pages/HardwareIOMonitor';
import LogViewer from './admin-interface/01-local-dashboard/pages/LogViewer';
import FirmwareVersionPanel from './admin-interface/01-local-dashboard/pages/FirmwareVersionPanel';
import MaintenanceScheduler from './admin-interface/01-local-dashboard/pages/MaintenanceScheduler';
import FactoryResetWizard from './admin-interface/01-local-dashboard/pages/FactoryResetWizard';
import ChargingProfileSelector from './admin-interface/02-bms-charging/pages/ChargingProfileSelector';
import BMSDataVisualizer from './admin-interface/02-bms-charging/pages/BMSDataVisualizer';
import SoHDegradationChart from './admin-interface/02-bms-charging/pages/SoHDegradationChart';
import ChargeCycleCounter from './admin-interface/02-bms-charging/pages/ChargeCycleCounter';
import FaultCodeDecoder from './admin-interface/02-bms-charging/pages/FaultCodeDecoder';
import EmergencyChargeCutoff from './admin-interface/02-bms-charging/pages/EmergencyChargeCutoff';
import ThermalManagement from './admin-interface/02-bms-charging/pages/ThermalManagement';
import PowerSourceSelector from './admin-interface/02-bms-charging/pages/PowerSourceSelector';
import MultiWANStatus from './admin-interface/03-connectivity-network/pages/MultiWANStatus';
import FailoverVisualization from './admin-interface/03-connectivity-network/pages/FailoverVisualization';
import VPNTunnelStatus from './admin-interface/03-connectivity-network/pages/VPNTunnelStatus';
import MQTTBrokerMonitor from './admin-interface/03-connectivity-network/pages/MQTTBrokerMonitor';
import OfflineQueueViewer from './admin-interface/03-connectivity-network/pages/OfflineQueueViewer';
import BandwidthUsage from './admin-interface/03-connectivity-network/pages/BandwidthUsage';
import PingTracerouteTool from './admin-interface/03-connectivity-network/pages/PingTracerouteTool';
import TLSCertificateMonitor from './admin-interface/03-connectivity-network/pages/TLSCertificateMonitor';
import RoleManagement from './admin-interface/04-security-access/pages/RoleManagement';
import SSHAuditViewer from './admin-interface/04-security-access/pages/SSHAuditViewer';
import SecureBootTPM from './admin-interface/04-security-access/pages/SecureBootTPM';
import ConfigAuditTrail from './admin-interface/04-security-access/pages/ConfigAuditTrail';
import FirewallRuleViewer from './admin-interface/04-security-access/pages/FirewallRuleViewer';
import IntrusionAlerts from './admin-interface/04-security-access/pages/IntrusionAlerts';
import USBPortLock from './admin-interface/04-security-access/pages/USBPortLock';
import EncryptedStorage from './admin-interface/04-security-access/pages/EncryptedStorage';
import SelfTestPanel from './admin-interface/05-diagnostics-maintenance/pages/SelfTestPanel';
import SlotActuatorTest from './admin-interface/05-diagnostics-maintenance/pages/SlotActuatorTest';
import RFIDNFCCalibration from './admin-interface/05-diagnostics-maintenance/pages/RFIDNFCCalibration';
import CameraPreview from './admin-interface/05-diagnostics-maintenance/pages/CameraPreview';
import PeripheralHealth from './admin-interface/05-diagnostics-maintenance/pages/PeripheralHealth';
import RemoteScreenShare from './admin-interface/05-diagnostics-maintenance/pages/RemoteScreenShare';
import ComponentRuntime from './admin-interface/05-diagnostics-maintenance/pages/ComponentRuntime';
import BackupRestore from './admin-interface/05-diagnostics-maintenance/pages/BackupRestore';
import SwapTransactionLogs from './admin-interface/06-reporting-logs/pages/SwapTransactionLogs';
import EnergyConsumption from './admin-interface/06-reporting-logs/pages/EnergyConsumption';
import BatteryRotationAnalytics from './admin-interface/06-reporting-logs/pages/BatteryRotationAnalytics';
import UptimeReporting from './admin-interface/06-reporting-logs/pages/UptimeReporting';
import ErrorFrequencyHistogram from './admin-interface/06-reporting-logs/pages/ErrorFrequencyHistogram';
import EndOfDaySummary from './admin-interface/06-reporting-logs/pages/EndOfDaySummary';
import LogRetentionConfig from './admin-interface/06-reporting-logs/pages/LogRetentionConfig';
import SyslogExport from './admin-interface/06-reporting-logs/pages/SyslogExport';

import {
  House, SquaresFour, Cpu, WifiHigh, LockSimple, Wrench, FileText,
} from '@phosphor-icons/react';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react';

/* ── Module index type ── */
interface ModuleInfo {
  path: string;
  title: string;
  description: string;
  screens: number;
  icon: PhosphorIcon;
  accent: string;
  iconBg: string;
}

/* customerModules removed as we now use a unified flow out of CustomerHub */

const adminModules: ModuleInfo[] = [
  { path: '/admin/dashboard', title: 'Local Dashboard', description: 'System resources, process health, logs, firmware, maintenance', screens: 8, icon: SquaresFour, accent: '#A78295', iconBg: 'rgba(167,130,149,0.18)' },
  { path: '/admin/bms', title: 'BMS & Charging', description: 'Charging profiles, BMS data, SoH charts, thermal management', screens: 8, icon: Cpu, accent: '#C6A7B6', iconBg: 'rgba(198,167,182,0.18)' },
  { path: '/admin/network', title: 'Connectivity', description: 'Multi-WAN, failover, VPN, MQTT, bandwidth, diagnostics', screens: 8, icon: WifiHigh, accent: '#EFE1D1', iconBg: 'rgba(239,225,209,0.14)' },
  { path: '/admin/security', title: 'Security & Access', description: 'Role management, SSH audit, firewall, intrusion detection', screens: 8, icon: LockSimple, accent: '#8A687A', iconBg: 'rgba(138,104,122,0.18)' },
  { path: '/admin/diagnostics', title: 'Diagnostics', description: 'Self-test, actuator test, calibration, screen-share, backup', screens: 8, icon: Wrench, accent: '#DCC9BF', iconBg: 'rgba(239,225,209,0.1)' },
  { path: '/admin/reports', title: 'Reporting & Logs', description: 'Transaction logs, energy reports, uptime, error histograms', screens: 8, icon: FileText, accent: '#B595A4', iconBg: 'rgba(181,149,164,0.18)' },
];

function ModuleCard({ m }: { m: ModuleInfo }) {
  const Icon = m.icon;
  return (
    <Link
      to={m.path}
      className="module-card"
      style={{ '--card-accent': m.accent, '--icon-bg': m.iconBg, '--icon-color': m.accent } as React.CSSProperties}
    >
      <div className="card-icon">
        <Icon size={20} weight="light" />
      </div>
      <div className="card-body">
        <h3>{m.title}</h3>
        <p>{m.description}</p>
        <span className="badge badge-screens">{m.screens} screens</span>
      </div>
    </Link>
  );
}

function RootHub() {
  return (
    <div className="prototype-hub">
      <div className="hub-header">
        <h1>Battery Swap Kiosk</h1>
        <p className="subtitle">Select Flow</p>
      </div>
      <div className="module-grid">
        <Link to="/customer" className="module-card" style={{ '--card-accent': '#A78295', '--icon-bg': 'rgba(167,130,149,0.18)', '--icon-color': '#EFE1D1' } as React.CSSProperties}>
          <div className="card-icon"><House size={20} weight="light" /></div>
          <div className="card-body">
            <h3>Customer Flow</h3>
            <p>End-user battery swap experience</p>
          </div>
        </Link>
        <Link to="/admin" className="module-card" style={{ '--card-accent': '#EFE1D1', '--icon-bg': 'rgba(239,225,209,0.14)', '--icon-color': '#EFE1D1' } as React.CSSProperties}>
          <div className="card-icon"><Wrench size={20} weight="light" /></div>
          <div className="card-body">
            <h3>Admin Flow</h3>
            <p>Station management and diagnostics</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function CustomerHub() {
  const {
    shellSupportText,
    shellTimeLabel,
    stationLabel,
    telemetry,
    copy,
    simulationMode,
    updateTelemetry,
  } = useHomeIdle();
  const [showSimulationPane, setShowSimulationPane] = useState(false);

  const availabilityText = `${copy.availabilityLabel}: ${telemetry.availableBatteries}/${telemetry.totalBatteries}`;
  const hasError = telemetry.operationalStatus === 'maintenance';

  return (
    <div style={{ width: '100vw', height: '100vh', padding: 0, margin: 0, overflow: 'hidden' }}>
      <Link to="/" className="back-link" aria-label="Back to flows">
        <span className="back-link__icon" aria-hidden="true">←</span>
        <span className="back-link__label">Back to Flows</span>
      </Link>
      <KioskShell
        stationName={stationLabel}
        time={shellTimeLabel}
        hasError={hasError}
        connectivity={telemetry.connectivity}
        supportText={shellSupportText}
        availabilityText={availabilityText}
        onClockTripleClick={() => {
          setShowSimulationPane((currentValue) => !currentValue);
        }}
        overlay={showSimulationPane ? (
          <SimulationPane
            telemetry={telemetry}
            onTelemetryChange={updateTelemetry}
            onClose={() => setShowSimulationPane(false)}
          />
        ) : null}
        footerActions={(
          <IdleTechnicalDrawer
            copy={copy}
            simulationMode={simulationMode}
            telemetry={telemetry}
          />
        )}
      >
        <Outlet />
      </KioskShell>
    </div>
  );
}

function CustomerFlow() {
  return (
    <HomeIdleProvider>
      <CustomerHub />
    </HomeIdleProvider>
  );
}

function AdminHub() {
  return (
    <div className="prototype-hub">
      <Link to="/" className="back-link" aria-label="Back to flows">
        <span className="back-link__icon" aria-hidden="true">←</span>
        <span className="back-link__label">Back to Flows</span>
      </Link>
      <div className="hub-header" style={{ marginTop: '24px' }}>
        <h1>Admin Interface</h1>
        <p className="subtitle">UX Prototype Screens</p>
      </div>
      <div className="module-grid">
        {adminModules.map((m) => <ModuleCard key={m.path} m={m} />)}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootHub />} />
      {/* ── Customer Interface ── */}
      <Route path="/customer" element={<CustomerFlow />}>
        <Route index element={<Navigate to="/customer/home" replace />} />
        <Route path="home" element={<IdleAttractScreen />} />
        <Route path="home/status" element={<StationStatusScreen />} />

        <Route path="auth-select" element={<AuthMethodSelector />} />
        <Route path="auth" element={<QRScannerScreen />} />
        <Route path="auth/nfc" element={<NFCTapScreen />} />
        <Route path="auth/otp" element={<MobileOTPScreen />} />
        <Route path="auth/rfid" element={<RFIDReaderScreen />} />
        <Route path="auth/biometric" element={<BiometricScreen />} />
        <Route path="auth/guest" element={<GuestModeScreen />} />
        <Route path="auth/not-found" element={<AccountNotFoundScreen />} />

        <Route path="swap" element={<SlotMapScreen />} />
        <Route path="swap/battery-info" element={<BatteryInfoScreen />} />
        <Route path="swap/auto-assign" element={<AutoAssignScreen />} />
        <Route path="swap/manual-select" element={<ManualSlotSelectScreen />} />
        <Route path="swap/confirm" element={<SwapConfirmationScreen />} />
        <Route path="swap/timer" element={<SwapTimerScreen />} />
        <Route path="swap/receipt" element={<PostSwapReceiptScreen />} />

        <Route path="payment" element={<WalletBalanceScreen />} />
        <Route path="payment/cost" element={<CostBreakdownScreen />} />
        <Route path="payment/subscription" element={<SubscriptionBadgeScreen />} />
        <Route path="payment/upi" element={<UPIPaymentScreen />} />
        <Route path="payment/confirm" element={<OneTapConfirmScreen />} />
        <Route path="payment/failure" element={<PaymentFailureScreen />} />
        <Route path="payment/corporate" element={<CorporateBillingScreen />} />
        <Route path="payment/history" element={<TransactionHistoryScreen />} />

        <Route path="alerts" element={<TempWarningScreen />} />
        <Route path="alerts/lockout" element={<OvertempLockoutScreen />} />
        <Route path="alerts/slot-jam" element={<SlotJamErrorScreen />} />
        <Route path="alerts/fire" element={<FireSmokeOverlayScreen />} />
        <Route path="alerts/power-outage" element={<PowerOutageScreen />} />
        <Route path="alerts/tamper" element={<TamperDetectionScreen />} />
        <Route path="alerts/feedback" element={<PostSwapFeedbackScreen />} />

        <Route path="accessibility" element={<HighContrastScreen />} />
        <Route path="accessibility/large-text" element={<LargeTextScreen />} />
        <Route path="accessibility/glove" element={<RainGloveScreen />} />
        <Route path="accessibility/antiglare" element={<SunlightAntiglareScreen />} />
      </Route>

      {/* ── Admin Interface ── */}
      <Route path="/admin" element={<AdminHub />} />
      <Route path="/admin/dashboard" element={<DashboardOverview />} />
      <Route path="/admin/dashboard/resources" element={<SystemResourceMonitor />} />
      <Route path="/admin/dashboard/processes" element={<ProcessHealthPanel />} />
      <Route path="/admin/dashboard/hardware" element={<HardwareIOMonitor />} />
      <Route path="/admin/dashboard/logs" element={<LogViewer />} />
      <Route path="/admin/dashboard/firmware" element={<FirmwareVersionPanel />} />
      <Route path="/admin/dashboard/maintenance" element={<MaintenanceScheduler />} />
      <Route path="/admin/dashboard/reset" element={<FactoryResetWizard />} />

      <Route path="/admin/bms" element={<ChargingProfileSelector />} />
      <Route path="/admin/bms/data" element={<BMSDataVisualizer />} />
      <Route path="/admin/bms/soh" element={<SoHDegradationChart />} />
      <Route path="/admin/bms/cycles" element={<ChargeCycleCounter />} />
      <Route path="/admin/bms/faults" element={<FaultCodeDecoder />} />
      <Route path="/admin/bms/cutoff" element={<EmergencyChargeCutoff />} />
      <Route path="/admin/bms/thermal" element={<ThermalManagement />} />
      <Route path="/admin/bms/power" element={<PowerSourceSelector />} />

      <Route path="/admin/network" element={<MultiWANStatus />} />
      <Route path="/admin/network/failover" element={<FailoverVisualization />} />
      <Route path="/admin/network/vpn" element={<VPNTunnelStatus />} />
      <Route path="/admin/network/mqtt" element={<MQTTBrokerMonitor />} />
      <Route path="/admin/network/offline-queue" element={<OfflineQueueViewer />} />
      <Route path="/admin/network/bandwidth" element={<BandwidthUsage />} />
      <Route path="/admin/network/ping" element={<PingTracerouteTool />} />
      <Route path="/admin/network/tls" element={<TLSCertificateMonitor />} />

      <Route path="/admin/security" element={<RoleManagement />} />
      <Route path="/admin/security/ssh" element={<SSHAuditViewer />} />
      <Route path="/admin/security/boot" element={<SecureBootTPM />} />
      <Route path="/admin/security/audit" element={<ConfigAuditTrail />} />
      <Route path="/admin/security/firewall" element={<FirewallRuleViewer />} />
      <Route path="/admin/security/intrusion" element={<IntrusionAlerts />} />
      <Route path="/admin/security/usb" element={<USBPortLock />} />
      <Route path="/admin/security/storage" element={<EncryptedStorage />} />

      <Route path="/admin/diagnostics" element={<SelfTestPanel />} />
      <Route path="/admin/diagnostics/actuator" element={<SlotActuatorTest />} />
      <Route path="/admin/diagnostics/rfid" element={<RFIDNFCCalibration />} />
      <Route path="/admin/diagnostics/camera" element={<CameraPreview />} />
      <Route path="/admin/diagnostics/peripherals" element={<PeripheralHealth />} />
      <Route path="/admin/diagnostics/screenshare" element={<RemoteScreenShare />} />
      <Route path="/admin/diagnostics/runtime" element={<ComponentRuntime />} />
      <Route path="/admin/diagnostics/backup" element={<BackupRestore />} />

      <Route path="/admin/reports" element={<SwapTransactionLogs />} />
      <Route path="/admin/reports/energy" element={<EnergyConsumption />} />
      <Route path="/admin/reports/rotation" element={<BatteryRotationAnalytics />} />
      <Route path="/admin/reports/uptime" element={<UptimeReporting />} />
      <Route path="/admin/reports/errors" element={<ErrorFrequencyHistogram />} />
      <Route path="/admin/reports/summary" element={<EndOfDaySummary />} />
      <Route path="/admin/reports/retention" element={<LogRetentionConfig />} />
      <Route path="/admin/reports/syslog" element={<SyslogExport />} />
    </Routes>
  );
}
