export const SummaryPreview = ({ resumeInfo }: { resumeInfo: any }) => {
  return (
    <div>
      <p className='sm:text-xl text-sm '>{resumeInfo?.summary}</p>
    </div>
  );
};
