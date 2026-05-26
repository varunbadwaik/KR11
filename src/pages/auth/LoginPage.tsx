import { LoginScreen } from '../../app/components/LoginScreen';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
	const navigate = useNavigate();
	return <LoginScreen onContinue={() => navigate('/otp')} />;
}
