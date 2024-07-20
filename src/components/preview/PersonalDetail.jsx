import React from 'react'

const PersonalDetail = ({resumeInfo}) => {
  return (
    <div>
        <h2 className={`font-bold text-center text-xl text-[${resumeInfo?.themeColor}]`}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 className={`text-center text-sm font-medium text-[${resumeInfo?.themeColor}]`}>{resumeInfo?.jobTitle}</h2>
        <h2 className={`text-center font-normal text-xs text-[${resumeInfo?.themeColor}]`}>{resumeInfo?.address}</h2>

        <div className='flex justify-between'>
            <h2 className={`font-normal text-xs text-[${resumeInfo?.themeColor}]`}>{resumeInfo?.phone}</h2>
            <h2 className={`font-normal text-xs text-[${resumeInfo?.themeColor}]`}>{resumeInfo?.email}</h2>
        </div>
        <hr className={`border my-2 border-[${resumeInfo?.themeColor}]`} />
    </div>
  )
}

export default PersonalDetail