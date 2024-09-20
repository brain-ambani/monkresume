export const ExperiencePreview = ({ resumeInfo }: { resumeInfo: any }) => {
  return (
    <div className='my-6'>
      <h2
        className='text-center sm:text-xl font-semibold mb-2'
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.experience.map((experience: any, index: any) => (
        <div
          key={index}
          className='my-4 sm:my-5'
        >
          <h2 className='text-xl font-semibold'>{experience.title}</h2>
          <h2 className='text-lg font-semibold flex justify-between items-center'>
            {experience.companyName}, {experience.city}, {experience.state}
            <span className='text-sm sm:text-lg font-semibold'>
              {experience.startDate} - {experience.endDate || 'Present'}
            </span>
          </h2>
          <p className='sm:text-xl text-sm'>{experience.workSummary}</p>
        </div>
      ))}
    </div>
  );
};
