import { CreateTeamScreen } from '../../app/components/CreateTeamScreen';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateTeamPage() {
	const navigate = useNavigate();
	const { eventId } = useParams();
	const eventName = eventId ? decodeURIComponent(eventId) : 'Event';

	return <CreateTeamScreen eventName={eventName} eventId={eventId} onBack={() => navigate(-1)} />;
}
