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

        <div className="kiosk-note-card kiosk-note-card--alert">
          <div className="kiosk-note-card__body">
            <p className="kiosk-note-card__text">
              The QR code, NFC card, or phone number you provided is not linked to a registered rider account.
            </p>
          </div>
        </div>

        <div className="not-found-actions">
          <button className="btn btn-primary">
            <DeviceMobile size={18} weight="bold" /> Register New Account
          </button>
          <Link to="/customer/auth-select" className="btn btn-secondary">
            Try a different login method
          </Link>
          <Link to="/customer/auth/guest" className="btn btn-ghost">
            Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
}
