import { WelcomeMsg } from '@/app/dashboard/components/welcome';
import { AddResume } from '@/app/dashboard/components/addResume';

import { db } from '@/lib/db';

import { auth } from '@clerk/nextjs/server';
import { ResumeCard } from './components/resumeCard';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const { userId } = auth();
  if (!userId) {
    return <p>Log in to view your resumes</p>;
  }
  const previousResumes = await db.resume.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: 'desc', // Sort resumes by creation date in descending order
    },
  });
  return (
    <main className='h-screen p-5  sm:px-16 lg:px-44 bg-gray-100'>
      <h1 className=' text-3xl   font-extralight text-indigo-600'>
        My Resumes
      </h1>
      <WelcomeMsg />
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mt-10'>
        <AddResume />
        {previousResumes.length > 0 &&
          previousResumes.map((resume) => (
            <div key={resume.resumeId}>
              <ResumeCard resume={resume} />
            </div>
          ))}
      </div>
    </main>
  );
}
