import { Link } from 'react-router-dom';
import { QrCode, WifiHigh, ChatCircleText, CreditCard, Fingerprint, User } from '@phosphor-icons/react';
import '../auth.css';

const authMethods = [
    {
        id: 'qr',
        path: '/customer/auth',
        icon: QrCode,
        title: 'QR Code',
        desc: 'Scan your QR code from the app',
        accent: 'qr',
    },
    {
        id: 'nfc',
        path: '/customer/auth/nfc',
        icon: WifiHigh,
        title: 'NFC Tap',
        desc: 'Tap your phone or NFC card',
        accent: 'nfc',
    },
    {
        id: 'otp',
        path: '/customer/auth/otp',
        icon: ChatCircleText,
        title: 'Mobile OTP',
        desc: 'Login with phone number & OTP',
        accent: 'otp',
    },
    {
        id: 'rfid',
        path: '/customer/auth/rfid',
        icon: CreditCard,
        title: 'RFID / Member Card',
        desc: 'Insert or tap your membership card',
        accent: 'rfid',
    },
    {
        id: 'biometric',
        path: '/customer/auth/biometric',
        icon: Fingerprint,
        title: 'Fingerprint',
        desc: 'Biometric fingerprint scan',
        accent: 'biometric',
    },
    {
        id: 'guest',
        path: '/customer/auth/guest',
        icon: User,
        title: 'Continue as Guest',
        desc: 'Limited swap quota — No account needed',
        accent: 'guest',
        fullWidth: true,
    },
];

export default function AuthMethodSelector() {
    return (
        <div className="auth-container">
            <Link to="/" className="auth-back-btn">
                <span className="arrow">&#8592;</span> Back
            </Link>

            <div className="auth-header">
                <h1>Choose Login Method</h1>
                <p>Select a modern login method to securely start your battery swap</p>
            </div>

            <div className="auth-method-grid">
                {authMethods.map((m) => {
                    const Icon = m.icon;
                    return (
                        <Link
                            key={m.id}
                            to={m.path}
                            className={`auth-method-card ${m.accent}${'fullWidth' in m && m.fullWidth ? ' full-width' : ''}`}
                        >
                            <div className="icon-circle">
                                <Icon size={26} weight="light" />
                            </div>
                            <h3>{m.title}</h3>
                            <span className="method-desc">{m.desc}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
