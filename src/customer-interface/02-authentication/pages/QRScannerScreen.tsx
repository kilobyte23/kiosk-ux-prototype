import { Link } from 'react-router-dom';
import { Scan, ArrowLeft } from '@phosphor-icons/react';
import '../auth.css';

export default function QRScannerScreen() {
  return (
    <div className="auth-screen">
      <Link to="/customer/auth-select" className="auth-back-btn">
        <ArrowLeft size={16} weight="bold" /> Back
      </Link>

      <div className="auth-screen-content">
        <h2>Scan QR Code</h2>
        <p className="subtitle">Open your app and hold the QR code in front of the scanner</p>

        <div className="qr-scanner-box">
          <div className="qr-corner tl" />
          <div className="qr-corner tr" />
          <div className="qr-corner bl" />
          <div className="qr-corner br" />
          <div className="qr-scan-line" />
          <div className="qr-grid-overlay">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="qr-grid-cell" />
            ))}
          </div>
        </div>

        <div className="qr-status">
          <span className="pulse-dot" />
          Scanner active — waiting for QR code
        </div>

        <div className="auth-divider">or use another method</div>

        <Link to="/customer/auth-select" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          <Scan size={18} weight="bold" /> Choose different login method
        </Link>
      </div>
    </div>
  );
}
