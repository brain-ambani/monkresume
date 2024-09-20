import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react';

import PersonalDetailPreview from './preview/PersonalDetailPreview';
import { SummaryPreview } from './preview/SummaryPreview';

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext<any>(ResumeInfoContext);
  return (
    <div
      className='shadow-lg h-full p-6 sm:border-t-[20px] border-t-[10px] '
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo} />

      {/* Professional Experience */}

      {/* Education */}

      {/* Skills */}
    </div>
  );
};

export default ResumePreview;
