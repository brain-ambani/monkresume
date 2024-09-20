'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { FormSection } from '@/app/dashboard/resume/components/FormSection';
import ResumePreview from '@/app/dashboard/resume/components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import { ResumeInfo } from '@/lib/types';

export default function EditResume() {
  const params = useParams();

  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | null>();

  useEffect(() => {
    setResumeInfo(dummy);
  }, []);
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:p-10 p-4 sm:gap-10 gap-8'>
        {/* Form section */}
        <FormSection />
        {/* Preview section */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}
