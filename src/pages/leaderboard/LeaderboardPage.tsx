import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Medal, Award, TrendingUp, TrendingDown } from 'lucide-react';
import { mockEventTitles, mockLeaderboardRows } from '../../mocks';
import { EmptyState, ErrorState, AppHeader, BottomNav } from '../../components/common';

const events = mockEventTitles;
const leaderboardData = mockLeaderboardRows;
const hasLeaderboardError = false;

export default function LeaderboardPage() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState('One Day');
  const [status] = useState<'live' | 'pending' | 'final'>('live');

  const getStatusBadge = () => {
    switch (status) {
      case 'live':
        return (
          <span className="px-3 py-1 bg-[#E6F7F0] text-[#14B86A] text-xs font-semibold rounded-full inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#14B86A] rounded-full animate-pulse-dot" />
            Live
          </span>
        );
      case 'pending':
        return (
          <span className="px-3 py-1 bg-[#FFF4D8] text-[#F5A400] text-xs font-semibold rounded-full">
            Results Pending
          </span>
        );
      case 'final':
        return (
          <span className="px-3 py-1 bg-[#EAF2FF] text-[#2563EB] text-xs font-semibold rounded-full">
            Final Results
          </span>
        );
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-[#F5A400]" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-[#94A3B8]" />;
    if (rank === 3) return <Award className="w-5 h-5 text-[#CD7F32]" />;
    return null;
  };

  const handleBack = () => {
    navigate('/home');
  };

  const top3 = leaderboardData.slice(0, 3);
  const rank1 = top3.find((p) => p.rank === 1);
  const rank2 = top3.find((p) => p.rank === 2);
  const rank3 = top3.find((p) => p.rank === 3);

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB]">
      {/* Header */}
      <AppHeader onBack={handleBack} title="Leaderboard" />

      {/* Event Selector + Status */}
      <div className="px-4 pb-3 pt-2 bg-transparent">
        {/* Event Pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {events.map((event) => (
            <button
              key={event}
              onClick={() => setSelectedEvent(event)}
              className={`px-4.5 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 ${
                selectedEvent === event
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/25'
                  : 'bg-white text-[#667085] border border-gray-200 hover:bg-gray-50 active:scale-95'
              }`}
            >
              {event}
            </button>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center justify-between mt-1">
          {getStatusBadge()}
          <p className="text-[11px] text-[#9CA3AF] font-bold tracking-wide uppercase select-none">
            {status === 'live' && 'Live ranking in progress'}
            {status === 'pending' && 'Results announced at EOD'}
            {status === 'final' && 'Final results'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {hasLeaderboardError ? (
          <div className="px-4 pt-4">
            <ErrorState
              title="Leaderboard unavailable"
              message="We could not load rankings right now. Please try again shortly."
            />
          </div>
        ) : leaderboardData.length === 0 ? (
          <div className="px-4 pt-4">
            <EmptyState
              title="No rankings yet"
              message="Leaderboard rows will appear once teams start scoring."
            />
          </div>
        ) : (
          <>
            {/* Top 3 Podium */}
            <div className="bg-gradient-to-b from-[#E0ECFF]/40 via-[#EAF2FF]/30 to-[#F4F7FB]/10 px-4 py-9 mb-2 select-none">
              <div className="flex items-end justify-center gap-4.5">
                {/* Rank 2 (Left) */}
                {rank2 && (
                  <div className="flex flex-col items-center w-[90px]">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 rounded-full bg-white shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex items-center justify-center border-[3px] border-[#94A3B8] relative overflow-hidden">
                        {rank2.avatar ? (
                          <img
                            src={rank2.avatar}
                            alt={rank2.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-base font-black text-[#2563EB]">
                            {rank2.name.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5.5 h-5.5 rounded-full bg-[#94A3B8] flex items-center justify-center shadow-md border-2 border-white">
                        <span className="text-[9px] font-black text-white">2</span>
                      </div>
                    </div>

                    <p className="text-xs font-black text-[#101828] leading-tight text-center flex items-center justify-center gap-1">
                      {rank2.name} {rank2.flag}
                    </p>
                    <p className="text-[10px] text-[#667085] font-extrabold mt-0.5">
                      {rank2.score.toLocaleString()}
                    </p>

                    {rank2.topPrediction && (
                      <span className="text-[8.5px] bg-white/90 border border-gray-200/80 px-2 py-0.5 rounded-full mt-1.5 text-[#2563EB] font-black shadow-2xs whitespace-nowrap">
                        {rank2.topPrediction}
                      </span>
                    )}

                    {rank2.coins > 0 && (
                      <div className="mt-2 px-2.5 py-0.5 bg-[#FFF4D8] border border-[#FFE7A8] rounded-full flex items-center gap-1 shadow-sm">
                        <span className="text-[8px]">🪙</span>
                        <span className="text-[9.5px] font-black text-[#F5A400]">
                          {rank2.coins}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Rank 1 (Center) */}
                {rank1 && (
                  <div className="flex flex-col items-center w-[105px] -mt-5">
                    <div className="relative mb-3.5">
                      <div className="w-20 h-20 rounded-full bg-white shadow-premium-lg hover:shadow-premium-xl hover:scale-105 transition-all duration-300 flex items-center justify-center border-[3.5px] border-[#F5A400] relative overflow-hidden">
                        {rank1.avatar ? (
                          <img
                            src={rank1.avatar}
                            alt={rank1.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xl font-black text-[#2563EB]">
                            {rank1.name.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5A400] flex items-center justify-center shadow-md border border-white">
                        <Trophy className="w-3 h-3 text-white" />
                      </div>

                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5.5 h-5.5 rounded-full bg-[#F5A400] flex items-center justify-center shadow-md border-2 border-white">
                        <span className="text-[9px] font-black text-white">1</span>
                      </div>
                    </div>

                    <p className="text-[13px] font-black text-[#101828] leading-tight text-center flex items-center justify-center gap-1">
                      {rank1.name} {rank1.flag}
                      <span className="px-1.5 py-0.25 bg-[#FF6B35] text-white text-[7.5px] font-black rounded-full uppercase tracking-wider scale-90 leading-none">
                        You
                      </span>
                    </p>
                    <p className="text-[10.5px] text-[#667085] font-extrabold mt-0.5">
                      {rank1.score.toLocaleString()}
                    </p>

                    {rank1.topPrediction && (
                      <span className="text-[8.5px] bg-white/95 border border-[#F5A400]/40 px-2 py-0.5 rounded-full mt-1.5 text-[#F5A400] font-black shadow-2xs whitespace-nowrap">
                        {rank1.topPrediction}
                      </span>
                    )}

                    {rank1.coins > 0 && (
                      <div className="mt-2 px-3 py-0.5 bg-[#FFF4D8] border border-[#FFE7A8] rounded-full flex items-center gap-1 shadow-md shadow-[#F5A400]/5">
                        <span className="text-[8px]">🪙</span>
                        <span className="text-[10px] font-black text-[#F5A400]">{rank1.coins}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Rank 3 (Right) */}
                {rank3 && (
                  <div className="flex flex-col items-center w-[90px]">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 rounded-full bg-white shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex items-center justify-center border-[3px] border-[#CD7F32] relative overflow-hidden">
                        {rank3.avatar ? (
                          <img
                            src={rank3.avatar}
                            alt={rank3.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-base font-black text-[#2563EB]">
                            {rank3.name.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5.5 h-5.5 rounded-full bg-[#CD7F32] flex items-center justify-center shadow-md border-2 border-white">
                        <span className="text-[9px] font-black text-white">3</span>
                      </div>
                    </div>

                    <p className="text-xs font-black text-[#101828] leading-tight text-center flex items-center justify-center gap-1">
                      {rank3.name} {rank3.flag}
                    </p>
                    <p className="text-[10px] text-[#667085] font-extrabold mt-0.5">
                      {rank3.score.toLocaleString()}
                    </p>

                    {rank3.topPrediction && (
                      <span className="text-[8.5px] bg-white/90 border border-gray-200/80 px-2 py-0.5 rounded-full mt-1.5 text-[#2563EB] font-black shadow-2xs whitespace-nowrap">
                        {rank3.topPrediction}
                      </span>
                    )}

                    {rank3.coins > 0 && (
                      <div className="mt-2 px-2.5 py-0.5 bg-[#FFF4D8] border border-[#FFE7A8] rounded-full flex items-center gap-1 shadow-sm">
                        <span className="text-[8px]">🪙</span>
                        <span className="text-[9.5px] font-black text-[#F5A400]">
                          {rank3.coins}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Full Ranking List */}
            <div className="px-4">
              <h3 className="text-[10.5px] font-extrabold text-[#667085] mb-3 uppercase tracking-wider select-none">
                All Rankings
              </h3>
              <div className="space-y-2.5">
                {leaderboardData.map((player) => (
                  <div
                    key={player.rank}
                    className={`bg-white rounded-2xl p-3.5 border transition-all duration-200 flex items-center justify-between hover:-translate-y-0.5 ${
                      player.rank === 1
                        ? 'border-[#F5A400]/45 shadow-premium-md hover:shadow-premium-lg bg-gradient-to-r from-[#FFFDF9] to-white'
                        : player.rank === 2
                          ? 'border-[#94A3B8]/30 shadow-premium-md hover:shadow-premium-lg bg-gradient-to-r from-[#F9FAFB] to-white'
                          : player.rank === 3
                            ? 'border-[#CD7F32]/25 shadow-premium-md hover:shadow-premium-lg bg-gradient-to-r from-[#FCFBF9] to-white'
                            : 'border-gray-200/70 shadow-premium-sm hover:shadow-premium-md'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 flex-1 min-w-0">
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 select-none">
                        {getRankIcon(player.rank) || (
                          <span className="text-[12px] font-black text-[#9CA3AF]">
                            {player.rank}
                          </span>
                        )}
                      </div>

                      <div className="w-10 h-10 rounded-full bg-[#EAF2FF] flex items-center justify-center flex-shrink-0 border border-[#2563EB]/5 shadow-inner overflow-hidden">
                        {player.avatar ? (
                          <img
                            src={player.avatar}
                            alt={player.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xs font-black text-[#2563EB]">
                            {player.name.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-black text-[#101828] truncate flex items-center gap-1.5">
                          {player.name}
                          {player.flag && (
                            <span className="text-[11px] leading-none select-none">
                              {player.flag}
                            </span>
                          )}
                          {player.name === 'Lockie' && (
                            <span className="px-1.5 py-0.25 bg-[#FF6B35] text-white text-[7.5px] font-black rounded-full uppercase tracking-widest leading-none select-none shadow-2xs">
                              You
                            </span>
                          )}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5 select-none">
                          <p className="text-[11px] text-[#667085] font-bold">
                            {player.score.toLocaleString()} pts
                          </p>
                          {player.topPrediction && (
                            <>
                              <span className="text-gray-300 text-[10px]">•</span>
                              <span className="text-[9px] font-black text-[#2563EB] bg-[#EAF2FF] px-2 py-0.25 rounded-md border border-[#2563EB]/8">
                                {player.topPrediction}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex-shrink-0 select-none">
                        {player.movement === 'up' && (
                          <div className="w-6.5 h-6.5 rounded-full bg-[#E6F7F0] flex items-center justify-center border border-[#14B86A]/10 animate-in zoom-in-50 duration-200">
                            <TrendingUp className="w-3.5 h-3.5 text-[#14B86A] stroke-[2.5]" />
                          </div>
                        )}
                        {player.movement === 'down' && (
                          <div className="w-6.5 h-6.5 rounded-full bg-[#FFF0F0] flex items-center justify-center border border-[#E5484D]/10 animate-in zoom-in-50 duration-200">
                            <TrendingDown className="w-3.5 h-3.5 text-[#E5484D] stroke-[2.5]" />
                          </div>
                        )}
                        {player.movement === 'same' && (
                          <div className="w-6.5 h-6.5 rounded-full bg-[#F4F7FB] flex items-center justify-center border border-gray-100">
                            <div className="w-2.5 h-0.5 bg-[#9CA3AF] rounded-full" />
                          </div>
                        )}
                      </div>

                      {player.coins > 0 && (
                        <div className="px-2.5 py-0.5 bg-[#FFF4D8] border border-[#FFE7A8] rounded-full flex items-center gap-1 flex-shrink-0 shadow-sm animate-in fade-in duration-200">
                          <span className="text-[8px]">🪙</span>
                          <span className="text-[10px] font-black text-[#F5A400]">
                            {player.coins}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <BottomNav
        active="leaderboard"
        onNavigate={(tab) => {
          if (tab === 'home') navigate('/home');
          else if (tab === 'settings') navigate('/settings');
        }}
      />
    </div>
  );
}
