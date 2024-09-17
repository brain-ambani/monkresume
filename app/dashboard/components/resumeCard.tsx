import { db } from '@/lib/db';
import { AddResume } from './addResume';

import { auth } from '@clerk/nextjs/server';

export const ResumeCard = async () => {
  const { userId } = auth();
  if (!userId) {
    return <p>Log in to view your resumes</p>;
  }
  const previousResumes = await db.resume.findMany({
    where: {
      userId: userId,
    },
  });
  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mt-10'>
      <AddResume />
      {previousResumes.map((resume) => (
        <div
          key={resume.resumeId}
          className='p-14 py-24  sm:gap-10 border flex items-center justify-center 
      bg-gray-200 rounded-lg sm:h-[280px] lg:h-[320px] hover:scale-105 transition-all
      hover:shadow-md hover:bg-gray-500 hover:text-slate-100 hover:cursor-pointer'
        >
          <p>{resume.title}</p>
        </div>
      ))}
    </div>
  );
};
