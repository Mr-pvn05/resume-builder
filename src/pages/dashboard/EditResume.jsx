import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditResume = () => {
  const { resumeId } = useParams();
  useEffect(() => {
    console.log("Path : ", resumeId);
  }, []);
  return <div>EditResume</div>;
};

export default EditResume;
