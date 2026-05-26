export interface User {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  city?: string;
  dateOfBirth?: string;
  coinBalance: number;
  profileCompleted: boolean;
}
