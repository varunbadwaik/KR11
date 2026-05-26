import { useState, useRef, useEffect, useCallback } from 'react';
import { AppHeader } from '../../components/common';

interface OTPScreenProps {
  onVerify: () => void;
  onBack: () => void;
}

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 30;

export function OTPScreen({ onVerify, onBack }: OTPScreenProps) {
  const [otp, setOtp] = useState<string[]>(['1', '2', '3', '4', '5', '6']);
  const [resendTimer, setResendTimer] = useState(RESEND_COOLDOWN);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isFilled = otp.every((d) => d !== '');

  useEffect(() => {
    if (resendTimer <= 0) return;
    const id = setInterval(() => setResendTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [resendTimer]);

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!/^\d*$/.test(value)) return;

      const digit = value.slice(-1);
      const next = [...otp];
      next[index] = digit;
      setOtp(next);

      if (digit && index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [otp],
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [otp],
  );

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = Array(OTP_LENGTH).fill('');
    for (let i = 0; i < pasted.length; i++) {
      next[i] = pasted[i];
    }
    setOtp(next);
    const focusIdx = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[focusIdx]?.focus();
  }, []);

  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(''));
    setResendTimer(RESEND_COOLDOWN);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB]">
      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-6 pt-12">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#EAF2FF] flex items-center justify-center mb-5 mx-auto">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-[#101828] mb-1.5 text-center">Verify OTP</h1>
          <p className="text-sm text-[#667085] mb-2 text-center leading-relaxed">
            Enter the 6-digit code sent to your mobile number
          </p>
          <p className="text-xs text-[#2563EB] font-semibold mb-8 text-center">
            Demo Code: 123456 (Pre-filled for your convenience)
          </p>

          {/* OTP Input */}
          <div className="flex gap-2.5 justify-center mb-6" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-12 text-center text-xl font-bold rounded-full transition-all duration-200 focus:outline-none ${
                  digit
                    ? 'bg-[#EAF2FF] border-2 border-[#2563EB] text-[#101828]'
                    : 'bg-white border-2 border-[#E5E7EB] text-[#101828] focus:border-[#2563EB] focus:bg-[#EAF2FF]/30'
                }`}
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Resend */}
          <div className="text-sm text-center text-[#667085] mb-8">
            {resendTimer > 0 ? (
              <span>
                Resend code in{' '}
                <span className="font-semibold text-[#2563EB]">
                  00:{resendTimer.toString().padStart(2, '0')}
                </span>
              </span>
            ) : (
              <span>
                Didn't receive the code?{' '}
                <button
                  onClick={handleResend}
                  className="text-[#2563EB] font-semibold hover:underline"
                >
                  Resend OTP
                </button>
              </span>
            )}
          </div>

          {/* Verify Button */}
          <button
            onClick={onVerify}
            disabled={!isFilled}
            className="w-full py-3.5 bg-[#F5A400] text-white text-base font-semibold rounded-full hover:bg-[#E69500] active:scale-[0.98] transition-all shadow-sm shadow-[#F5A400]/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Verify & Continue
          </button>

          {/* Edit Number */}
          <button
            onClick={onBack}
            className="w-full mt-4 text-sm text-[#2563EB] font-semibold hover:underline transition-colors"
          >
            Edit mobile number
          </button>
        </div>
      </div>
    </div>
  );
}
