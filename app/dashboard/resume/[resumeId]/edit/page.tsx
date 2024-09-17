import { db } from '@/lib/db';
import { FormSection } from '@/app/dashboard/resume/components/FormSection';
import { ResumePreview } from '@/app/dashboard/resume/components/ResumePreview';

export default async function EditResume({
  params,
}: {
  params: { resumeId: string };
}) {
  const resume = await db.resume.findUnique({
    where: {
      resumeId: params.resumeId,
    },
  });
  if (!resume) {
    return 'resume not found';
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      {/* Form Section */}
      <FormSection />

      {/* Preview section */}
      <ResumePreview />
    </div>
  );
}
