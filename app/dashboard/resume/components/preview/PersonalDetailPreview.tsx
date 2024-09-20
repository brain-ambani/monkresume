const PersonalDetailPreview = ({ resumeInfo }: { resumeInfo: any }) => {
  return (
    <div>
      <h2
        className='font-bold text-xl text-center'
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className='text-center sm:text-lg text-sm font-medium'>
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className='text-center font-normal text-sm sm:text-lg '
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.address}
      </h2>
      <div className='flex justify-between'>
        <h2
          className='font-normal text-sm sm:text-lg '
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className='font-normal text-sm sm:text-lg '
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      <hr
        className='border-[1.5px] my-2'
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </div>
  );
};

export default PersonalDetailPreview;
