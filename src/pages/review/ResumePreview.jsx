import { useResumeContext } from "@/context/ResumeInfoContext";
import PersonalDetail from "@/components/preview/PersonalDetail";
import Summary from "@/components/preview/Summary";
import ProfessionalExp from "@/components/preview/ProfessionalExp";
import Educational from "@/components/preview/Educational";
import Skill from "@/components/preview/Skill";

const ResumePreview = () => {
  const {resumeInfo, setResumeInfo} = useResumeContext();
  return (
    <div className={`shadow-lg h-full p-14 border-t-[20px] border-[${resumeInfo?.themeColor}]`}>
      {/* Personal details */}
      <PersonalDetail resumeInfo={resumeInfo}/>
      {/* Summary */}
      <Summary resumeInfo={resumeInfo}/>
      {/* Personal experiance */}
      <ProfessionalExp resumeInfo={resumeInfo}/>
      {/* Educatinal details */}
      <Educational resumeInfo={resumeInfo}/>
      {/* Skills */}
      <Skill resumeInfo={resumeInfo}/>
    </div>
  );
};

export default ResumePreview;
