export type CompanyMovementDirection = 'UP' | 'DOWN' | 'NEUTRAL';

export interface Company {
  id: string;
  symbol: string;
  name: string;
  sector: string;
  coinValue: number;
  movementPercent: number;
  movementDirection: CompanyMovementDirection;
  description?: string;
  riskLabel?: string;
}

export interface CompanyChartPoint {
  time: string;
  value: number;
}
