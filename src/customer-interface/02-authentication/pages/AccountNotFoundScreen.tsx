import { Link } from 'react-router-dom';
import { ArrowLeft, UserMinus, DeviceMobile } from '@phosphor-icons/react';
import '../auth.css';

export default function AccountNotFoundScreen() {
  return (
    <div className="auth-screen">
      <Link to="/customer/auth-select" className="auth-back-btn">
        <ArrowLeft size={16} weight="bold" /> Back
      </Link>

      <div className="auth-screen-content">
        <h2>Account Not Found</h2>
        <p className="subtitle">We couldn't find an account with the credentials you provided</p>

        <div className="not-found-icon">
          <UserMinus size={44} weight="light" />
        </div>

        <div style={{
          background: 'rgba(255, 69, 58, 0.06)',
          border: '1px solid rgba(255, 69, 58, 0.15)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px',
          width: '100%',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '14px', color: 'var(--gray-400)', lineHeight: 1.5 }}>
            The QR code, NFC card, or phone number is not linked to any registered account.
          </p>
        </div>

        <div className="not-found-actions">
          <button className="btn btn-primary">
            <DeviceMobile size={18} weight="bold" /> Register New Account
          </button>
          <Link to="/customer/auth-select" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            Try a different login method
          </Link>
          <Link to="/customer/auth/guest" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
            Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
}
