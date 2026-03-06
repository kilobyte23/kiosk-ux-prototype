import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Lightbulb } from '@phosphor-icons/react';
import '../auth.css';

export default function RFIDReaderScreen() {
  return (
    <div className="auth-screen">
      <Link to="/customer/auth-select" className="auth-back-btn">
        <ArrowLeft size={16} weight="bold" /> Back
      </Link>

      <div className="auth-screen-content">
        <h2>RFID / Member Card</h2>
        <p className="subtitle">Insert or tap your membership card on the reader</p>

        <div className="rfid-reader-visual">
          <span className="rfid-card-icon"><CreditCard size={40} weight="light" /></span>
          <div className="rfid-slot">
            <div className="rfid-led-ring" />
          </div>
        </div>

        <div className="status-chip waiting">
          <span className="kiosk-status-dot">&#9679;</span> LED blinking — reader ready
        </div>

        <div className="kiosk-note-card">
          <Lightbulb size={18} weight="fill" className="kiosk-note-icon" />
          <div className="kiosk-note-card__body">
            <p className="kiosk-note-card__text">
              Hold your card near the illuminated reader area. The indicator becomes{' '}
              <span className="kiosk-emphasis">steady and bright</span> once the card is recognized.
            </p>
          </div>
        </div>

        <div className="auth-divider">or use another method</div>

        <Link to="/customer/auth-select" className="btn btn-secondary">
          Choose different login method
        </Link>
      </div>
    </div>
  );
}
