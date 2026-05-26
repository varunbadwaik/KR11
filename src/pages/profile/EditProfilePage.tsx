import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialProfile = {
  fullName: 'Lockie',
  mobileNumber: '',
  email: '',
  city: '',
  dateOfBirth: '',
};

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(initialProfile);

  const updateField = (field: keyof typeof initialProfile, value: string) => {
    setProfile((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="h-full flex flex-col bg-[#F4F7FB]">
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-[#F4F7FB] flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[#101828]" />
          </button>
          <h1 className="text-xl font-bold text-[#101828]">Edit Profile</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#E5E7EB] space-y-4">
          <ProfileField
            label="Full Name"
            value={profile.fullName}
            onChange={(value) => updateField('fullName', value)}
          />
          <ProfileField
            label="Mobile Number"
            value={profile.mobileNumber}
            onChange={(value) => updateField('mobileNumber', value)}
            inputMode="tel"
          />
          <ProfileField
            label="Email"
            value={profile.email}
            onChange={(value) => updateField('email', value)}
            type="email"
          />
          <ProfileField
            label="City"
            value={profile.city}
            onChange={(value) => updateField('city', value)}
          />
          <ProfileField
            label="Date of Birth"
            value={profile.dateOfBirth}
            onChange={(value) => updateField('dateOfBirth', value)}
            type="date"
          />
        </div>

        <button
          type="button"
          className="mt-4 w-full py-3.5 bg-[#F5A400] text-white text-base font-semibold rounded-full hover:bg-[#E69500] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

interface ProfileFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}

function ProfileField({ label, value, onChange, type = 'text', inputMode }: ProfileFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#101828] mb-2 block">{label}</span>
      <input
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full px-4 py-3 bg-[#F4F7FB] border border-[#E5E7EB] rounded-2xl text-sm text-[#101828] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
      />
    </label>
  );
}
