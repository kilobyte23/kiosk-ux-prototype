import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Fingerprint } from '@phosphor-icons/react';
import '../auth.css';

export default function BiometricScreen() {
  const [confidence, setConfidence] = useState(0);
  const [status, setStatus] = useState<'waiting' | 'scanning' | 'matched'>('waiting');

  useEffect(() => {
    const scanTimer = setTimeout(() => {
      setStatus('scanning');
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 92) {
          progress = 92;
          clearInterval(interval);
          setTimeout(() => {
            setConfidence(97);
            setStatus('matched');
          }, 400);
        }
        setConfidence(Math.round(progress));
      }, 200);
      return () => clearInterval(interval);
    }, 1500);
    return () => clearTimeout(scanTimer);
  }, []);

  return (
    <div className="auth-screen">
      <Link to="/customer/auth-select" className="auth-back-btn">
        <ArrowLeft size={16} weight="bold" /> Back
      </Link>

      <div className="auth-screen-content">
        <h2>Fingerprint Scan</h2>
        <p className="subtitle">Place your finger on the biometric pad below</p>

        <div className="fingerprint-pad">
          <span className="fingerprint-icon"><Fingerprint size={56} weight="light" /></span>
          {status !== 'matched' && <div className="fingerprint-scan-line" />}
        </div>

        <div className="confidence-bar-container">
          <div className="confidence-bar-label">
            <span>Match confidence</span>
            <span className="value">{confidence}%</span>
          </div>
          <div className="confidence-bar-track">
            <div
              className="confidence-bar-fill"
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>

        <div className={`status-chip ${status === 'matched' ? 'active' : 'waiting'}`}>
          <span style={{ fontSize: '8px' }}>&#9679;</span>
          {status === 'waiting' && 'Waiting for fingerprint…'}
          {status === 'scanning' && 'Scanning fingerprint…'}
          {status === 'matched' && 'Fingerprint matched'}
        </div>

        <div className="auth-divider">or use another method</div>

        <Link to="/customer/auth-select" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          Choose different login method
        </Link>
      </div>
    </div>
  );
}
