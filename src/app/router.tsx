import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import OTPPage from '../pages/auth/OTPPage';
import HomePage from '../pages/home/HomePage';
import CreateTeamPage from '../pages/events/CreateTeamPage';
import ContestPage from '../pages/events/ContestPage';
import CompaniesPage from '../pages/companies/CompaniesPage';
import CompanyDetailPage from '../pages/companies/CompanyDetailPage';
import CompanyChartPage from '../pages/companies/CompanyChartPage';
import LeaderboardPage from '../pages/leaderboard/LeaderboardPage';
import EditProfilePage from '../pages/profile/EditProfilePage';
import SettingsPage from '../pages/settings/SettingsPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/otp" element={<OTPPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/events/:eventId/c" element={<ContestPage />} />
      <Route path="/events/:eventId/create-team" element={<CreateTeamPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/companies/:companyId" element={<CompanyDetailPage />} />
      <Route path="/companies/:companyId/chart" element={<CompanyChartPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/profile/edit" element={<EditProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
