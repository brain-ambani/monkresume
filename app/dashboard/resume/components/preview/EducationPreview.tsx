export const EducationPreview = ({ resumeInfo }: { resumeInfo: any }) => {
  return (
    <div className='my-6'>
      <h2
        className='text-center sm:text-xl font-semibold mb-2'
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.education.map((education: any, index: any) => (
        <div
          key={index}
          className='my-5'
        >
          <h2
            className='text-sm sm:text-lg font-bold'
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {education?.universityName}
          </h2>
          <h2 className='text-sm sm:text-lg font-semibold flex justify-between items-center'>
            {education?.degree} in {education?.major}
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
          <p className='sm:text-xl text-lg my-2'>{education?.description}</p>
        </div>
      ))}
    </div>
  );
};
