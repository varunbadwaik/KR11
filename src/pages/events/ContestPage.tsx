import { useNavigate, useParams } from 'react-router-dom';
import { ContestScreen } from '../../app/components/ContestScreen';

export default function ContestPage() {
	const navigate = useNavigate();
	const { eventId } = useParams();
	const eventName = eventId ? decodeURIComponent(eventId) : 'Event';

	return (
		<ContestScreen
			eventName={eventName}
			eventId={eventId || ''}
			onBack={() => navigate(-1)}
			onJoinContest={() => navigate(`/events/${encodeURIComponent(eventName)}/create-team`)}
		/>
	);
}
