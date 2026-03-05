import { Link } from 'react-router-dom';
import { ArrowLeft, User } from '@phosphor-icons/react';
import '../auth.css';

export default function GuestModeScreen() {
  return (
    <div className="auth-screen">
      <Link to="/customer/auth-select" className="auth-back-btn">
        <ArrowLeft size={16} weight="bold" /> Back
      </Link>

      <div className="auth-screen-content">
        <h2>Guest Mode</h2>
        <p className="subtitle">Continue without an account — limited features apply</p>

        <div className="guest-badge">
          <div className="icon"><User size={36} weight="light" /></div>
          <h3>Visitor Access</h3>
          <p>No registration required</p>
        </div>

        <div className="quota-display">
          <div className="quota-ring">1</div>
          <div className="quota-info">
            <h4>1 swap remaining today</h4>
            <p>Guest users can perform up to 1 battery swap per 24-hour period</p>
          </div>
        </div>

        <div style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--gray-800)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px',
          width: '100%',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--gray-400)', lineHeight: 1.6, marginBottom: '12px' }}>
            <strong style={{ color: 'var(--gray-200)' }}>Guest limitations:</strong>
          </p>
          <ul style={{ fontSize: '13px', color: 'var(--gray-500)', paddingLeft: '16px', lineHeight: 1.8, margin: 0 }}>
            <li>1 swap per 24 hours</li>
            <li>No subscription discounts</li>
            <li>No wallet or saved payment methods</li>
            <li>No swap history</li>
          </ul>
        </div>

        <button className="btn btn-primary">
          Continue as Guest
        </button>

        <div className="auth-divider">want full access?</div>

        <Link to="/customer/auth-select" className="btn btn-outline" style={{ textDecoration: 'none' }}>
          Sign in with an account
        </Link>
      </div>
    </div>
  );
}
