import { db } from '@/lib/db';

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
    <div>
      <h1>Edit resume {resume.title}</h1>
    </div>
  );
}
