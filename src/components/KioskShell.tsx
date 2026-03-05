import './KioskShell.css';
import { WifiHigh, BatteryFull, WarningCircle } from '@phosphor-icons/react';

interface KioskShellProps {
    children: React.ReactNode;
    stationName?: string;
    time?: string;
    hasError?: boolean;
}

export default function KioskShell({
    children,
    stationName = 'Station 042 • Central Park',
    time = '14:30',
    hasError = false
}: KioskShellProps) {
    return (
        <div className="kiosk-hardware-bezel">
            <div className="kiosk-screen-viewport">
                {/* Top Status Bar */}
                <div className={`kiosk-status-bar ${hasError ? 'status-error' : ''}`}>
                    <div className="status-left">
                        <span className="station-name">{stationName}</span>
                    </div>
                    <div className="status-center">
                        {hasError && <WarningCircle size={16} weight="fill" className="error-icon" />}
                        <span className="clock">{time}</span>
                    </div>
                    <div className="status-right">
                        <WifiHigh size={18} weight="bold" />
                        <BatteryFull size={20} weight="fill" style={{ marginLeft: '8px' }} />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="kiosk-main-content">
                    {children}
                </div>

                {/* Bottom Bar / Context Area (Optional/Persistent) */}
                <div className="kiosk-bottom-bar">
                    <div className="help-text">
                        <span>Customer Support: 1-800-SWAP-NOW</span>
                    </div>
                    <div className="version-info">
                        v2.4.1-rc3
                    </div>
                </div>
            </div>
        </div>
    );
}
