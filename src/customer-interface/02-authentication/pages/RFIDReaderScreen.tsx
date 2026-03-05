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
          <span style={{ fontSize: '8px' }}>&#9679;</span> LED blinking — reader ready
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--gray-800)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <Lightbulb size={18} weight="fill" style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <p style={{ fontSize: '13px', color: 'var(--gray-400)', lineHeight: 1.5 }}>
              Hold your card near the amber LED indicator on the reader slot.
              The LED will turn <strong style={{ color: '#30D158' }}>green</strong> when your card is recognized.
            </p>
          </div>
        </div>

        <div className="auth-divider">or use another method</div>

        <Link to="/customer/auth-select" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          Choose different login method
        </Link>
      </div>
    </div>
  );
}
