import React from 'react';

interface MobileShellProps {
  children: React.ReactNode;
}

export function MobileShell({ children }: MobileShellProps) {
  return (
    // Outer ambient wrapper: luxurious slate-dark ambient backdrop on desktop, full-bleed on mobile
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent sm:bg-gradient-to-br sm:from-[#080B11] sm:via-[#1A2035] sm:to-[#07090F] p-0 sm:p-6 md:p-8 transition-colors duration-300">
      
      {/* Physical iPhone 15 Pro Mockup Frame container - active only on larger screens */}
      <div className="relative w-full h-screen sm:w-[402px] sm:h-[864px] sm:max-h-[864px] rounded-none sm:rounded-[52px] bg-transparent sm:bg-black p-0 sm:p-[12px] shadow-none sm:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.85),_0_16px_32px_-8px_rgba(0,0,0,0.4)] border-none sm:border-[4px] sm:border-zinc-800 ring-0 sm:ring-[4px] sm:ring-zinc-900/60 ring-offset-0 sm:ring-offset-zinc-950 flex flex-col items-stretch transition-all duration-300">
        
        {/* Dynamic Island Cutout - visible only on desktop */}
        <div className="hidden sm:flex absolute top-[22px] left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-50 items-center justify-between px-3.5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.5)] pointer-events-none">
          {/* Simulated green camera indicator dot */}
          <div className="w-[4px] h-[4px] bg-[#10B981] rounded-full opacity-60"></div>
          {/* Simulated dual lens highlight */}
          <div className="w-[8px] h-[8px] bg-radial-gradient from-zinc-800 to-black border border-zinc-900 rounded-full opacity-70"></div>
        </div>

        {/* Physical Metallic Side Buttons - visible only on desktop */}
        {/* Left Bezel Side: Action Button & Volume controls */}
        <div className="hidden sm:block absolute left-[-4px] top-[130px] w-[4px] h-[26px] bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-l-md border-y border-zinc-600 shadow"></div>
        <div className="hidden sm:block absolute left-[-4px] top-[175px] w-[4px] h-[52px] bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-l-md border-y border-zinc-600 shadow"></div>
        <div className="hidden sm:block absolute left-[-4px] top-[242px] w-[4px] h-[52px] bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-l-md border-y border-zinc-600 shadow"></div>
        
        {/* Right Bezel Side: Power/Wake Button */}
        <div className="hidden sm:block absolute right-[-4px] top-[208px] w-[4px] h-[76px] bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-r-md border-y border-zinc-600 shadow"></div>

        {/* Physical Home Indicator bar overlay - visible only on desktop */}
        <div className="hidden sm:block absolute bottom-[18px] left-1/2 -translate-x-1/2 w-[120px] h-[4.5px] bg-black rounded-full z-50 opacity-40"></div>

        {/* Screen Container: Perfectly styled with curved boundaries inside the phone mockup */}
        <div className="w-full h-full bg-[#F4F7FB] rounded-none sm:rounded-[40px] overflow-hidden relative flex flex-col border-none sm:border sm:border-zinc-950/20 shadow-inner">
          
          {/* iOS-Style status bar padding and widgets - visible only on desktop */}
          <div className="hidden sm:flex h-[44px] w-full shrink-0 bg-[#F4F7FB] relative z-40 items-center justify-between px-7 text-[12px] text-zinc-900 font-bold tracking-tight pointer-events-none select-none">
            {/* Time Display */}
            <span>9:41</span>
            
            {/* Phone Widgets Icons (Signal, Wifi, Battery) */}
            <div className="flex items-center gap-1.5 opacity-85">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 11.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
              </svg>
              <div className="w-5 h-2.5 border border-zinc-900 rounded-[3px] p-[1.5px] flex items-center justify-start">
                <div className="h-full w-[85%] bg-zinc-900 rounded-[1px]"></div>
              </div>
            </div>
          </div>

          {/* Actual Active App Content - completely responsive, full scrollable container */}
          <div className="w-full flex-1 overflow-y-auto relative flex flex-col scrollbar-none">
            {children}
          </div>
          
        </div>

      </div>
    </div>
  );
}
