import { ArrowLeft } from 'lucide-react';

interface AppHeaderProps {
  title?: string;
  onBack?: () => void;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  transparent?: boolean;
}

export function AppHeader({
  title,
  onBack,
  leftContent,
  rightContent,
  centerContent,
  transparent = true,
}: AppHeaderProps) {
  return (
    <div
      className={`sticky top-0 z-30 px-4 py-3 flex items-center justify-between gap-2 ${
        transparent ? '' : 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-2 min-w-[40px]">
        {onBack && (
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-[#F4F7FB] hover:bg-black/5 flex items-center justify-center active:scale-95 transition-all text-[#101828]"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
        )}
        {leftContent}
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center">
        {centerContent ?? (
          title && (
            <h1 className="text-lg font-bold text-[#101828] truncate">{title}</h1>
          )
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 min-w-[40px] justify-end">
        {rightContent}
      </div>
    </div>
  );
}
