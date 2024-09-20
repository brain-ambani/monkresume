import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react';

import PersonalDetailPreview from './preview/PersonalDetailPreview';
import { SummaryPreview } from './preview/SummaryPreview';
import { ExperiencePreview } from './preview/ExperiencePreview';
import { EducationPreview } from './preview/EducationPreview';
import SkillPreview from './preview/SkillPreview';

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext<any>(ResumeInfoContext);
  return (
    <div
      className='shadow-lg h-full p-2 sm:p-4 md:p-6 sm:border-t-[20px] border-t-[10px] '
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo} />

      {/* Professional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />

      {/* Education */}
      <EducationPreview resumeInfo={resumeInfo} />

      {/* Skills */}
      <SkillPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
