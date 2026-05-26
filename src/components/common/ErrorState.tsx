interface ErrorStateProps {
  title: string;
  message: string;
  retryLabel?: string;
  onRetry?: () => void;
}

export function ErrorState({ title, message, retryLabel, onRetry }: ErrorStateProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#FAD1D3] text-center">
      <div className="w-12 h-12 rounded-full bg-[#FFF0F0] mx-auto mb-4 flex items-center justify-center">
        <span className="text-lg font-bold text-[#E5484D]">!</span>
      </div>
      <h3 className="text-base font-bold text-[#101828] mb-1">{title}</h3>
      <p className="text-sm text-[#667085]">{message}</p>
      {retryLabel && onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-[#2563EB] text-white text-sm font-semibold rounded-full hover:bg-[#1D4ED8] transition-colors"
        >
          {retryLabel}
        </button>
      )}
    </div>
  );
}
