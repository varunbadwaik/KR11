interface MobileShellProps {
  children: React.ReactNode;
}

export function MobileShell({ children }: MobileShellProps) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-[#E8EDF5]">
      <div className="w-full max-w-[480px] min-h-screen bg-[#F4F7FB] relative overflow-x-hidden shadow-2xl">
        {children}
      </div>
    </div>
  );
}
