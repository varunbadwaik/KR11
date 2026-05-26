import { Home } from '../../app/components/Home';
import { CoinWalletPopup } from '../../app/components/CoinWalletPopup';
import { NotificationsPopup } from '../../app/components/NotificationsPopup';
import { SideNavigation } from '../../app/components/SideNavigation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	const navigate = useNavigate();
	const [showSideNav, setShowSideNav] = useState(false);
	const [showCoinWallet, setShowCoinWallet] = useState(false);
	const [showNotifications, setShowNotifications] = useState(false);
	const [isKycCompleted, setIsKycCompleted] = useState(() => {
		return localStorage.getItem('kr11_kyc_completed') === 'true';
	});

	const handleCompleteKyc = () => {
		localStorage.setItem('kr11_kyc_completed', 'true');
		setIsKycCompleted(true);
	};

	const handleSideNavNavigate = (screen: string) => {
		setShowSideNav(false);

		switch (screen) {
			case 'home':
				navigate('/home');
				break;
			case 'know-your-company':
				navigate('/companies');
				break;
			case 'leaderboard':
				navigate('/leaderboard');
				break;
			case 'edit-profile':
				navigate('/profile/edit');
				break;
			case 'settings':
				navigate('/settings');
				break;
			case 'coin-wallet':
				setShowCoinWallet(true);
				break;
			case 'login':
				navigate('/login');
				break;
			default:
				break;
		}
	};

	return (
		<>
			<Home
				onPlayEvent={(eventName) => navigate(`/events/${encodeURIComponent(eventName)}/c`)}
				onOpenSideNav={() => setShowSideNav(true)}
				onOpenCoinWallet={() => setShowCoinWallet(true)}
				onOpenNotifications={() => setShowNotifications(true)}
				onKnowYourCompany={() => navigate('/companies')}
				onOpenLeaderboard={() => navigate('/leaderboard')}
				onOpenSettings={() => navigate('/settings')}
				isKycCompleted={isKycCompleted}
				onCompleteKyc={handleCompleteKyc}
			/>

			{showSideNav && (
				<SideNavigation
					onClose={() => setShowSideNav(false)}
					onNavigate={handleSideNavNavigate}
					isKycCompleted={isKycCompleted}
					onCompleteKyc={handleCompleteKyc}
				/>
			)}
			{showCoinWallet && <CoinWalletPopup onClose={() => setShowCoinWallet(false)} />}
			{showNotifications && <NotificationsPopup onClose={() => setShowNotifications(false)} />}
		</>
	);
}
