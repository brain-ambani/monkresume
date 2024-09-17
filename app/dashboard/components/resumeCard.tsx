import { Notebook } from 'lucide-react';
import Link from 'next/link';

interface ResumeCardProps {
  resume: {
    resumeId: string;
    title: string;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    jobTitle: string | null;
    phone: string | null;
    email: string | null;
    userId: string;
    createdAt: Date;
  };
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ resume }) => {
  return (
    <Link
      href={'/dashboard/resume/' + resume.resumeId + '/edit'}
      // className='p-14 py-28 sm:gap-10 border flex items-center justify-center
      // bg-gray-200 rounded-lg sm:h-[280px] lg:h-[320px] hover:scale-105 transition-all
      // hover:shadow-md hover:bg-gray-500 hover:text-slate-100 hover:cursor-pointer'
    >
      <div className='p-14  bg-secondary flex items-center justify-center h-[180px] sm:h-[280px] lg:h-[320px] border rounded-md border-violet-500 hover:scale-105 transition-all hover:shadow-md shadow-violet-500'>
        <Notebook />
      </div>
      <h2 className='text-center my-1'>{resume.title}</h2>
    </Link>
  );
};
