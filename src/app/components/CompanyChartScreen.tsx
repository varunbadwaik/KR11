import { useState } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockCompanyChart } from '../../mocks';

interface Company {
  name: string;
  sector: string;
  value: number;
  percentage: number;
}

interface CompanyChartScreenProps {
  company: Company;
  onBack: () => void;
}

const chartData = mockCompanyChart;

const timeFilters = ['1D', '5D', '1M', '6M', '1Y'];

export function CompanyChartScreen({ company, onBack }: CompanyChartScreenProps) {
  const [selectedFilter, setSelectedFilter] = useState('1D');

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB]">
      {/* Header */}
      <div className="bg-transparent px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-transparent hover:bg-black/5 active:scale-95 transition-all text-[#101828] flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <div className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center">
            <span className="text-sm font-bold text-[#2563EB]">
              {company.name.substring(0, 2)}
            </span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#101828]">{company.name}</h1>
            <span className="text-xs text-[#667085]">{company.sector}</span>
          </div>
        </div>

        <div className="bg-[#F4F7FB] rounded-2xl p-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-[#101828]">{company.value}</span>
            <span className="text-sm text-[#667085]">Coins</span>
          </div>
          <p className={`text-base font-semibold ${company.percentage >= 0 ? 'text-[#14B86A]' : 'text-[#E5484D]'}`}>
            {company.percentage >= 0 ? '+' : ''}{company.percentage.toFixed(2)}% Today
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
        {/* Chart */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#E5E7EB] mb-4">
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="time"
                  tick={{ fill: '#667085', fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  tick={{ fill: '#667085', fontSize: 12 }}
                  axisLine={{ stroke: '#E5E7EB' }}
                  domain={['dataMin - 10', 'dataMax + 10']}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '8px 12px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563EB"
                  strokeWidth={2}
                  dot={{ fill: '#2563EB', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Time Filters */}
          <div className="flex gap-2 justify-center">
            {timeFilters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedFilter === filter
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-[#F4F7FB] text-[#667085]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className="space-y-3 mb-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#14B86A]" />
                <span className="text-sm text-[#667085]">Today's Movement</span>
              </div>
              <span className="text-base font-bold text-[#14B86A]">+0.76%</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#2563EB]" />
                <span className="text-sm text-[#667085]">5-Day Trend</span>
              </div>
              <span className="text-base font-bold text-[#14B86A]">+2.34%</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-[#F5A400]" />
                <span className="text-sm text-[#667085]">Volatility</span>
              </div>
              <span className="text-base font-bold text-[#F5A400]">Medium</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#2563EB]" />
                <span className="text-sm text-[#667085]">Momentum</span>
              </div>
              <span className="text-base font-bold text-[#14B86A]">Positive</span>
            </div>
          </div>
        </div>

        {/* Back to Team Button */}
        <button
          onClick={onBack}
          className="w-full py-3.5 bg-[#F5A400] text-white text-base font-semibold rounded-full hover:bg-[#E69500] transition-colors"
        >
          Back to Team
        </button>
      </div>
    </div>
  );
}
