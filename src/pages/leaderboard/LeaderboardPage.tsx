import { LeaderboardScreen } from '../../app/components/LeaderboardScreen';
import { useNavigate } from 'react-router-dom';

export default function LeaderboardPage() {
	const navigate = useNavigate();

	return <LeaderboardScreen onBack={() => navigate('/home')} />;
}
