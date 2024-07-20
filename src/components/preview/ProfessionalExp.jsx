import React from 'react'

const ProfessionalExp = ({resumeInfo}) => {
  return (
    <div className='my-6'>
      <h2 className={`text-center font-bold text-sm mb-2 text-[${resumeInfo?.themeColor}]`}>Professional Experience</h2>
      <hr className={`border border-[${resumeInfo?.themeColor}]`} />
      {resumeInfo?.experience?.map((exp) => {
        return (
          <div className='my-5' key={exp.id}>
            <h2 className={`font-bold text-sm text-[${resumeInfo?.themeColor}]`}>{exp.title}</h2>
            <h2 className={`flex justify-between text-xs`}>
              {exp.companyName}, {exp.city}, {exp.state}
              <span>{exp.startDate} - {exp.currentlyWorking?"Present" : exp.endDate}</span>
            </h2>
            <p className='text-xs my-2'>{exp.workSummery}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProfessionalExp