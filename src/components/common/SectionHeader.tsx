interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
}

export function SectionHeader({ title, subtitle, rightContent }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-3 mb-4">
      <div>
        <h2 className="text-lg font-bold text-[#101828]">{title}</h2>
        {subtitle && <p className="text-xs text-[#667085] mt-1">{subtitle}</p>}
      </div>
      {rightContent && <div className="flex-shrink-0">{rightContent}</div>}
    </div>
  );
}
