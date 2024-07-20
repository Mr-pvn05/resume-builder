import React from 'react'

const Educational = ({resumeInfo}) => {
  return (
    <div className='my-6'>
      <h2 className={`text-center font-bold text-sm mb-2 text-[${resumeInfo?.themeColor}]`}>Education</h2>
      <hr className={`border border-[${resumeInfo?.themeColor}]`} />
      {resumeInfo?.education?.map((edu) => {
        return (
          <div className='my-5' key={edu.id}>
            <h2 className={`font-bold text-sm text-[${resumeInfo?.themeColor}]`}>{edu.universityName}</h2>
            <h2 className={`flex justify-between text-xs`}>
              {edu.degree} in {edu.major}
              <span>{edu.startDate} - {edu.endDate}</span>
            </h2>
            <p className='text-xs my-2'>{edu.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Educational