import { useContext } from 'react';

import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Button } from '@/components/ui/button';
import { savePersonalDetails } from '@/app/actions/savePersonalDetails ';

export const PersonalDetail = () => {
  //   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleInputChange = (e: any) => {
    // setResumeInfo((prev: any) => ({
    //   ...prev,
    //   [e.target.name]: e.target.value,
    // }));
  };
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Details</h2>
      <p>Get Started with the basic information</p>
      <form action={savePersonalDetails}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <label className='text-sm'>First Name</label>
            <Input
              name='firstName'
              required
            />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <Input
              name='lastName'
              required
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <Input
              name='jobTitle'
              required
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Address</label>
            <Input
              name='address'
              required
            />
          </div>
          <div>
            <label className='text-sm'>Phone</label>
            <Input
              name='phone'
              required
            />
          </div>
          <div>
            <label className='text-sm'>Email</label>
            <Input
              name='email'
              required
            />
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          <Button
            type='submit'
            className='bg-violet-500'
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
