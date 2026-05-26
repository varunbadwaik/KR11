import { OTPScreen } from '../../app/components/OTPScreen';
import { useNavigate } from 'react-router-dom';

export default function OTPPage() {
	const navigate = useNavigate();
	return <OTPScreen onVerify={() => navigate('/home')} onBack={() => navigate('/login')} />;
}
