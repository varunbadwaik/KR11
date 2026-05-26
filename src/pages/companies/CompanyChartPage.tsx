import { CompanyChartScreen } from '../../app/components/CompanyChartScreen';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmptyState } from '../../components/common';
import { findCompanyDetail } from '../../app/utils/companyLookup';

export default function CompanyChartPage() {
	const navigate = useNavigate();
	const { companyId } = useParams();
	const company = findCompanyDetail(companyId);

	if (!company) {
		return (
			<div className="h-full flex flex-col bg-[#F4F7FB]">
				<div className="bg-white px-4 py-4 shadow-sm">
					<div className="flex items-center gap-3">
						<button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center">
							<ArrowLeft className="w-5 h-5 text-[#101828]" />
						</button>
						<h1 className="text-xl font-bold text-[#101828]">Company Chart</h1>
					</div>
				</div>
				<div className="flex-1 px-4 pt-4">
					<EmptyState
						title="Chart not found"
						message="This company chart is not available in KR11 mock company data."
						actionLabel="Back"
						onAction={() => navigate(-1)}
					/>
				</div>
			</div>
		);
	}

	return <CompanyChartScreen company={company} onBack={() => navigate(-1)} />;
}
