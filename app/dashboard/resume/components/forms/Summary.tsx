import { updateSummary } from '@/app/actions/saveInfo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { toast } from 'sonner';

import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface SummaryProps {
  enableNext: (value: boolean) => void;
}

const Summary: React.FC<SummaryProps> = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext<any>(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  // Fetch the resume ID from the URL
  const params = useParams();
  const resumeId = params?.resumeId;
  console.log('Resume ID:', resumeId);

  const handleInputChange = (e: { target: { value: string } }) => {
    enableNext(false);
    const { value } = e.target;

    setResumeInfo({
      ...resumeInfo,
      summary: value, // Update the summary field in resumeInfo
    });
  };
  const onSave = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!resumeId) throw new Error('Resume ID not found');

      // Call the server action to update the resume details
      await updateSummary(
        Array.isArray(resumeId) ? resumeId[0] : resumeId,
        resumeInfo?.summary
      );

      setLoading(false);
      enableNext(true);
      toast('Summary updated successfully');

      console.log('Resume updated successfully');
    } catch (error) {
      console.error('Failed to update resume', error);
    }
  };

  return (
    <div className='p-5 shadow-md rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Summary</h2>
      <p>Add summary for your job title</p>
      <form
        onSubmit={onSave}
        className='mt-7'
      >
        <div className='flex justify-between items-end'>
          <label>Add Summary</label>
          <Button
            variant='outline'
            size='sm'
            className='text-violet-500 border-violet-500'
          >
            Generate from AI
          </Button>
        </div>
        <Textarea
          className='mt-5'
          required
          value={resumeInfo?.summary}
          onChange={handleInputChange}
        />
        <div className='mt-2 flex justify-end'>
          <Button
            className='bg-violet-500'
            disabled={loading}
          >
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
