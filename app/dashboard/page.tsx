import { WelcomeMsg } from '@/app/dashboard/components/welcome';
import { AddResume } from '@/app/dashboard/components/addResume';
import { ResumeCard } from './components/resumeCard';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  return (
    <main className='h-screen p-5  sm:px-16 lg:px-44 bg-gray-100'>
      <h1 className=' text-3xl   font-extralight text-indigo-600'>
        My Resumes
      </h1>
      <WelcomeMsg />
      <div>
        <ResumeCard />
      </div>
    </main>
  );
}
