import { LoaderCircle, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { v4 as uuidv4 } from "uuid";
import { createNewResume } from "../../service/global.api.js";
import { useUser } from "@clerk/clerk-react";
import { toast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const { user } = useUser();
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        resumeId: uuid,
        title: resumeTitle,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };
    createNewResume(data)
      .then((res) => {
        console.log("Response : ", res);
        navigation(`/dashboard/resume/${uuid}/edit`);
        setLoading(false);
        // toast({
        //   description: "Resume created sucessfully.",
        // });
      })
      .catch((error) => {
        console.log("Error : ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div
        onClick={() => setOpenDialog(true)}
        className="flex items-center justify-center p-14 py-24 border-4 border-dashed bg-secondary rounded-lg h-[280px] cursor-pointer mt-10 hover:scale-105 transition-all hover:shadow-md"
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new resume</DialogTitle>
            <DialogDescription>
              <span className="block my-3">
                Add a title for your new resume
              </span>
              <Input
                onChange={(e) => setResumeTitle(e.target.value)}
                placeholder="Ex.Full stack resume"
              />
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 justify-end">
            <Button
              onClick={() => {
                setOpenDialog(false);
                setResumeTitle("");
              }}
              variant="ghost"
            >
              Cancel
            </Button>
            <Button
              disabled={!resumeTitle || loading}
              onClick={() => handleSubmit()}
            >
              {loading ? (
                <LoaderCircle className="animate-spin mx-2" />
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
