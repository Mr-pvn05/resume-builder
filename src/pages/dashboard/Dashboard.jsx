import AddResume from "@/components/AddResume";
import { useUser } from "@clerk/clerk-react";
import { getUserResumes } from "../../../service/global.api.js";
import { useEffect, useState } from "react";
import ResumeCard from "@/components/ResumeCard.jsx";

const Dashboard = () => {
  const { user } = useUser();
  console.log("User : ", user);
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    getResumeList();
  }, [user]);

  // Get users resume list
  const getResumeList = () => {
    getUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then((res) => {
        console.log("User resumes list : ", res.data);
        setResumeList(res?.data.data);
      })
      .catch((error) => {
        console.log("Error getting user resumes list", error);
      });
  };

  return (
    <div className="p-10 md:p-20 lg:p-32">
      <h2 className="font-bold text-3xl">My resume</h2>
      <p className="my-4 text-lg">Create your resume to get your dream job.</p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10
      "
      >
        <AddResume />
        {resumeList.length > 0 &&
          resumeList?.map((resume) => {
            return <ResumeCard key={resume.id} resume={resume} />;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
