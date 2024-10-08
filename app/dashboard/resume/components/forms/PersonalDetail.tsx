import { updatePersonalDetails } from '@/app/actions/saveInfo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { toast } from 'sonner';

import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react';

interface PersonalDetailProps {
  enableNext: (value: boolean) => void;
}

const PersonalDetail: React.FC<PersonalDetailProps> = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext<any>(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  // Fetch the resume ID from the URL
  const params = useParams();
  const resumeId = params?.resumeId;
  console.log('Resume ID:', resumeId);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    enableNext(false);
    const { name, value } = e.target;

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };
  const onSave = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!resumeId) throw new Error('Resume ID not found');

      // Call the server action to update the resume details
      await updatePersonalDetails(
        Array.isArray(resumeId) ? resumeId[0] : resumeId,
        {
          firstName: resumeInfo.firstName,
          lastName: resumeInfo.lastName,
          jobTitle: resumeInfo.jobTitle,
          address: resumeInfo.address,
          phone: resumeInfo.phone,
          email: resumeInfo.email,
        }
      );

      setLoading(false);
      enableNext(true);
      toast('Personal details updated successfully');

      console.log('Resume updated successfully');
    } catch (error) {
      console.error('Failed to update resume', error);
    }
  };

  return (
    <div className='p-5 shadow-md rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Details</h2>
      <p>Get started with the basic information</p>
      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <label className='text-sm'>First Name</label>
            <Input
              name='firstName'
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <Input
              name='lastName'
              defaultValue={resumeInfo?.lastName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <Input
              name='jobTitle'
              defaultValue={resumeInfo?.jobTitle}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Adress</label>
            <Input
              name='address'
              defaultValue={resumeInfo?.address}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className=''>
            <label className='text-sm'>Phone</label>
            <Input
              name='phone'
              defaultValue={resumeInfo?.phone}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className=''>
            <label className='text-sm'>Email</label>
            <Input
              name='email'
              defaultValue={resumeInfo?.email}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='mt-3 flex justify-end '>
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

export default PersonalDetail;
