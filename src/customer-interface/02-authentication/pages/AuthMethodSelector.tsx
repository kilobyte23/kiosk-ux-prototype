import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, QrCode, WifiHigh, ChatCircleText, CreditCard, Fingerprint, User } from '@phosphor-icons/react';
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
    },
];

export default function AuthMethodSelector() {
    const navigate = useNavigate();

    return (
        <div className="auth-container auth-selector">
            <button
                type="button"
                className="auth-back-btn"
                onClick={() => {
                    if (window.history.length > 1) {
                        navigate(-1);
                        return;
                    }

                    navigate('/customer/home');
                }}
            >
                <ArrowLeft size={16} weight="bold" /> Back
            </button>

            <div className="auth-selector__body">
                <div className="auth-header auth-selector__header">
                    <h1>Choose Login Method</h1>
                    <p>Select a login method to start your battery swap.</p>
                </div>

                <div className="auth-method-grid">
                    {authMethods.map((m) => {
                        const Icon = m.icon;
                        return (
                            <Link
                                key={m.id}
                                to={m.path}
                                className={`auth-method-card ${m.accent}`}
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
        </div>
    );
}
