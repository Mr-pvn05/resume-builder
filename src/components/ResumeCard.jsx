import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  return (
    <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
      <div className="bg-secondary/50 border-2 border-solid border- mt-10 hover:scale-105 transition-all hover:shadow-md cursor-pointer flex items-center justify-center p-14 rounded-lg h-[280px]">
        <Notebook />
      </div>
      <h1 className="text-center">{resume.title}</h1>
    </Link>
  );
};

export default ResumeCard;
