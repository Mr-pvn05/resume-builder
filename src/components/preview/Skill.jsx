import React from 'react'

const Skill = ({resumeInfo}) => {
  return (
    <div className='my-6'>
      <h2 className={`text-center font-bold text-sm mb-2 text-[${resumeInfo?.themeColor}]`}>Skills</h2>
      <hr className={`border border-[${resumeInfo?.themeColor}]`} />
      <div className='grid grid-cols-2 gap-3 my-4'>
        {resumeInfo?.skills?.map((skill) => {
        return (
            <div className='my-5 flex items-center justify-between' key={skill.id}>
            <h2 className={`font-bold text-sm text-[${resumeInfo?.themeColor}]`}>{skill.name}</h2>
            <div className='h-2 bg-gray-200 w-[120px]'>
                <div className={`h-2 w-[${skill.rating}%] bg-[${resumeInfo?.themeColor}]`}>
                </div>
            </div>
            </div>
        )
        })}
      </div>
    </div>
  )
}

export default Skill