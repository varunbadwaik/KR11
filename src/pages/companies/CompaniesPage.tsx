import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanySummaryModal } from '../../app/components/CompanySummaryModal';
import { KnowYourCompanyScreen } from '../../app/components/KnowYourCompanyScreen';
import type { CompanySummaryMock } from '../../mocks';
import { getCompanyIdByName } from '../../app/utils/companyLookup';

type Company = CompanySummaryMock;

export default function CompaniesPage() {
	const navigate = useNavigate();
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

	const openChart = (company: Company) => {
		const companyId = getCompanyIdByName(company.name);
		if (!companyId) {
			return;
		}

		setSelectedCompany(null);
		navigate(`/companies/${companyId}/chart`, {
			state: { from: 'companies', company },
		});
	};

	return (
		<>
			<KnowYourCompanyScreen
				onBack={() => navigate(-1)}
				onViewCompany={setSelectedCompany}
			/>

			{selectedCompany && (
				<CompanySummaryModal
					company={selectedCompany}
					onClose={() => setSelectedCompany(null)}
					onViewChart={() => openChart(selectedCompany)}
				/>
			)}
		</>
	);
}
