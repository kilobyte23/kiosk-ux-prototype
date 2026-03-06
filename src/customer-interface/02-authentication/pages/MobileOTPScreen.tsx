import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import '../auth.css';

export default function MobileOTPScreen() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step !== 'otp') return;
    if (countdown <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [step, countdown]);

  const handlePhoneSubmit = () => {
    if (phone.length >= 10) {
      setStep('otp');
      setCountdown(30);
      setCanResend(false);
    }
  };

  const handleOtpChange = (idx: number, value: string) => {
    if (value.length > 1) return;
    const next = [...otp];
    next[idx] = value;
    setOtp(next);
    if (value && idx < 5) {
      otpRefs.current[idx + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleResend = () => {
    setCountdown(30);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    otpRefs.current[0]?.focus();
  };

  return (
    <div className="auth-screen">
      <Link to="/customer/auth-select" className="auth-back-btn">
        <ArrowLeft size={16} weight="bold" /> Back
      </Link>

      <div className="auth-screen-content">
        <h2>{step === 'phone' ? 'Enter Mobile Number' : 'Enter OTP'}</h2>
        <p className="subtitle">
          {step === 'phone'
            ? "We'll send you a one-time password to verify your identity"
            : `OTP sent to +91 ${phone.replace(/(\d{5})(\d{5})/, '$1 $2')}`}
        </p>

        <div className="otp-form">
          {step === 'phone' ? (
            <>
              <div className="phone-input-group">
                <div className="country-code">+91</div>
                <input
                  type="tel"
                  className="phone-input"
                  placeholder="Enter 10-digit number"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  autoFocus
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={handlePhoneSubmit}
                disabled={phone.length < 10}
                style={{ opacity: phone.length < 10 ? 0.5 : 1 }}
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <div className="otp-code-group">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => { otpRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    className="otp-digit"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    autoFocus={i === 0}
                  />
                ))}
              </div>

              <div className="otp-timer">
                {canResend ? (
                  <span>
                    Didn't receive the code?{' '}
                    <button className="resend-btn" onClick={handleResend}>
                      Resend OTP
                    </button>
                  </span>
                ) : (
                  <span>
                    Resend in <span className="countdown">{countdown}s</span>
                  </span>
                )}
              </div>

              <button
                className="btn btn-primary"
                disabled={otp.some((d) => !d)}
                style={{ opacity: otp.some((d) => !d) ? 0.5 : 1 }}
              >
                Verify OTP
              </button>

              <button className="btn btn-ghost" onClick={() => setStep('phone')}>
                Change phone number
              </button>
            </>
          )}
        </div>

        <div className="auth-divider">or use another method</div>

        <Link to="/customer/auth-select" className="btn btn-secondary">
          Choose different login method
        </Link>
      </div>
    </div>
  );
}
