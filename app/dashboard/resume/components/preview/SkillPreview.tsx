const SkillPreview = ({ resumeInfo }: { resumeInfo: any }) => {
  return (
    <div className='my-6'>
      <h2
        className='text-center font-bold sm:text-xl mb-2'
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      <div className='grid grid-cols-2 gap-3 my-4'>
        {resumeInfo?.skills.map((skill: any, index: any) => (
          <div
            key={index}
            className='flex items-center justify-between'
          >
            <h2 className='sm:text-xl text-sm '>{skill?.name}</h2>
            <div className='h-2 bg-gray-200 w-[90px] sm:w-[120px]'>
              <div
                className='h-2'
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill?.rating + '%',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPreview;
