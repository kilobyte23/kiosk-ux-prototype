import { useState, useEffect } from 'react';
import '../auth.css';

interface SessionTimeoutOverlayProps {
    seconds?: number;
    onStayActive?: () => void;
    onLogout?: () => void;
    visible?: boolean;
}

export default function SessionTimeoutOverlay({
    seconds = 60,
    onStayActive = () => { },
    onLogout = () => { },
    visible = true,
}: SessionTimeoutOverlayProps) {
    const [remaining, setRemaining] = useState(seconds);
    const circumference = 2 * Math.PI * 36;
    const dashOffset = circumference - (remaining / seconds) * circumference;

    useEffect(() => {
        if (!visible) return;
        setRemaining(seconds);
        const timer = setInterval(() => {
            setRemaining((r) => {
                if (r <= 1) {
                    clearInterval(timer);
                    onLogout();
                    return 0;
                }
                return r - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [visible, seconds, onLogout]);

    if (!visible) return null;

    return (
        <div className="timeout-overlay">
            <div className="timeout-card">
                <div className="timeout-ring">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <circle className="track" cx="40" cy="40" r="36" />
                        <circle
                            className="progress"
                            cx="40"
                            cy="40"
                            r="36"
                            strokeDasharray={circumference}
                            strokeDashoffset={dashOffset}
                        />
                    </svg>
                    <span className="seconds">{remaining}</span>
                </div>

                <h3>Session Expiring</h3>
                <p>Your session will end in {remaining} seconds due to inactivity. Would you like to stay active?</p>

                <div className="timeout-actions">
                    <button className="btn btn-primary" onClick={onStayActive}>
                        Stay Active
                    </button>
                    <button className="btn btn-ghost" onClick={onLogout}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}
