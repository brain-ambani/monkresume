import { updateSummary } from '@/app/actions/saveInfo';
import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';

import { Brain, LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { AIChatSession } from '@/lib/aimodel';

interface SummaryProps {
  enableNext: (value: boolean) => void;
}

const prompt =
  'Job Title: {jobTtile}, Depends on the job title give me summary for my resume within 4-5 lines';
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

  const GenerateSummaryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace('{jobTtile}', resumeInfo?.jobTitle);
    console.log('Prompt:', PROMPT);
    const result = await AIChatSession.sendMessage(PROMPT);
    console.log(result.response.text());
    setLoading(false);
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
            type='button'
            size='sm'
            onClick={() => GenerateSummaryFromAI()}
            className='text-violet-500 border-violet-500 flex gap-2'
          >
            <Brain className='w-4 h-4' />
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
