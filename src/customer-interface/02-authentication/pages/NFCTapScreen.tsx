import { Link } from 'react-router-dom';
import { WifiHigh, ArrowLeft } from '@phosphor-icons/react';
import '../auth.css';

export default function NFCTapScreen() {
  return (
    <div className="auth-screen">
      <Link to="/customer/auth-select" className="auth-back-btn">
        <ArrowLeft size={16} weight="bold" /> Back
      </Link>

      <div className="auth-screen-content">
        <h2>Tap to Authenticate</h2>
        <p className="subtitle">Hold your phone or NFC card near the reader</p>

        <div className="nfc-tap-area">
          <div className="nfc-pulse-ring" />
          <div className="nfc-pulse-ring" />
          <div className="nfc-pulse-ring" />
          <span className="nfc-icon"><WifiHigh size={48} weight="light" /></span>
        </div>

        <div className="nfc-label">
          Bring your device close to the reader<br />
          <strong style={{ color: '#BF5AF2' }}>NFC must be enabled</strong>
        </div>

        <div className="status-chip waiting">
          <span style={{ fontSize: '8px' }}>&#9679;</span> Waiting for NFC signal…
        </div>

        <div className="auth-divider">or use another method</div>

        <Link to="/customer/auth-select" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          Choose different login method
        </Link>
      </div>
    </div>
  );
}
