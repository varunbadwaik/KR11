interface EmptyStateProps {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, message, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB] text-center">
      <div className="w-12 h-12 rounded-full bg-[#EAF2FF] mx-auto mb-4 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-[#2563EB]" />
      </div>
      <h3 className="text-base font-bold text-[#101828] mb-1">{title}</h3>
      <p className="text-sm text-[#667085]">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-[#F5A400] text-white text-sm font-semibold rounded-full hover:bg-[#E69500] transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
