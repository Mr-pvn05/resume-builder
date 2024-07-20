import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "./FormSection";
import ResumePreview from "./ResumePreview";
import { ResumeInfoContextProvider } from "@/context/ResumeInfoContext";
import dummyData from "@/data/dummy";

const EditResume = () => {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  useEffect(() => {
    setResumeInfo(dummyData);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10 ">
      <ResumeInfoContextProvider value={{resumeInfo, setResumeInfo}}>
        <FormSection />
        <div>
          <ResumePreview />
        </div>
      </ResumeInfoContextProvider>
    </div>
  );
};

export default EditResume;
