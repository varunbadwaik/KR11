interface LoadingStateProps {
  title?: string;
  message?: string;
}

export function LoadingState({
  title = 'Loading',
  message = 'Please wait while KR11 gets things ready.',
}: LoadingStateProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E7EB] text-center">
      <div className="w-10 h-10 rounded-full border-4 border-[#EAF2FF] border-t-[#2563EB] animate-spin mx-auto mb-4" />
      <h3 className="text-base font-bold text-[#101828] mb-1">{title}</h3>
      <p className="text-sm text-[#667085]">{message}</p>
    </div>
  );
}
