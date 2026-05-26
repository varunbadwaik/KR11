import { ArrowLeft, Bell, ChevronRight, HelpCircle, Scale, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FantasyDisclaimer, BottomNav } from '../../components/common';

const sections = [
	{ title: 'Account', description: 'Profile, login, and account controls', icon: User },
	{ title: 'Notifications', description: 'Alerts and match reminders', icon: Bell },
	{ title: 'App Preferences', description: 'Display and gameplay preferences', icon: Settings },
	{ title: 'Help & Support', description: 'Guides and support resources', icon: HelpCircle },
	{ title: 'Legal & Disclaimer', description: 'KR11 gameplay terms and notices', icon: Scale },
];

export default function SettingsPage() {
	const navigate = useNavigate();

	return (
		<div className="h-full flex flex-col bg-[#F4F7FB] pb-24">
			<div className="bg-white px-4 py-4 shadow-sm">
				<div className="flex items-center gap-3">
					<button onClick={() => navigate('/home')} className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center">
						<ArrowLeft className="w-5 h-5 text-[#101828]" />
					</button>
					<h1 className="text-xl font-bold text-[#101828]">Settings</h1>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
				<div className="space-y-3 mb-4">
					{sections.map(({ title, description, icon: Icon }) => (
						<button
							key={title}
							type="button"
							className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB] flex items-center gap-3 text-left"
						>
							<div className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center flex-shrink-0">
								<Icon className="w-5 h-5 text-[#2563EB]" />
							</div>
							<div className="flex-1 min-w-0">
								<h2 className="text-sm font-bold text-[#101828]">{title}</h2>
								<p className="text-xs text-[#667085] truncate">{description}</p>
							</div>
							<ChevronRight className="w-5 h-5 text-[#667085] flex-shrink-0" />
						</button>
					))}
				</div>

				<FantasyDisclaimer />
			</div>

			<BottomNav
				active="settings"
				onNavigate={(tab) => {
					if (tab === 'home') navigate('/home');
					else if (tab === 'leaderboard') navigate('/leaderboard');
				}}
			/>
		</div>
	);
}
