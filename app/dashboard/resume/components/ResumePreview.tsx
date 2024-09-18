import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react';

import PersonalDetailPreview from './preview/PersonalDetailPreview';

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext<any>(ResumeInfoContext);
  return (
    <div
      className='shadow-lg h-full p-6 border-t-[20px]'
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summary */}

      {/* Professional Experience */}

      {/* Education */}

      {/* Skills */}
    </div>
  );
};

export default ResumePreview;
