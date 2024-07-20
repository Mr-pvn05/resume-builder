import { useResumeContext } from "@/context/ResumeInfoContext";
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { useState } from "react";
import { Bot, LoaderCircle } from "lucide-react";
import { updateResumeDetails } from "../../../service/global.api.js";
import { toast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useParams } from "react-router-dom";
import getSummaryByAI from "../../../service/geminiAI.js";

const Summary = ({setNextButton}) => {

  const {resumeId} = useParams();
  const {resumeInfo, setResumeInfo} = useResumeContext();
  const [formData, setFormData] = useState()
  const [loading, setLoading] = useState(false);
  const [aiLoader, setAiLoader] = useState(false)
  const [summaryByAi, setSummaryByAi] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      data: formData
    }
    updateResumeDetails(resumeId, data).then((res) => {
      if(res){
        setNextButton(true);
        toast({
            description: "Your resume has been updated",
        })
      }
    }).catch((err) => {
        console.log("Error : ", err)
        setLoading(false)
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
    }).finally(() => {
        setLoading(false)
    })
  } 

  const eventHandler = (e) => {
    setNextButton(false)
    
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value
    })
    setResumeInfo({
        ...resumeInfo,
        [name]: value
    })
  }

  const prompt = `Job title : ${resumeInfo?.jobTitle}, Depends on this job title write a summary for me within 4 to 5 lines in JSON format with feild experience level and summary with Experience level for freshers, Mid-level and Experienced`

  const generateSummaryFromAI = async () => {
    setAiLoader(true)
    const response = await getSummaryByAI(prompt);
    setSummaryByAi(JSON.parse(response));
    setAiLoader(false);
  }

  console.log("Parsed data : ", summaryByAi)

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-t-primary my-4'>
        <h2 className='font-bold text-lg'>Summary</h2>
        <p>Add summary for your job title</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="mt-7">
              <div className="flex justify-between items-end">
                  <label htmlFor="">Add Summary</label>
                  <Button onClick={generateSummaryFromAI} type="button" className="border-primary text-primary flex gap-1" size="sm" variant="outline"><Bot className={`${aiLoader && 'animate-spin'}`} />Generate From AI</Button>
              </div>
              <Textarea onChange={eventHandler} name="summary" className="mt-5"/>
          </div>
          <div className='mt-4 flex justify-end'>
              <Button disabled={loading} type="submit">{loading ? <LoaderCircle className="animate-spin mx-1" /> : "Save"}</Button>
          </div>
        </form>
        <div>
          {
            summaryByAi && (
              <div>
                <h2 className="font-bold text-lg">Experience level</h2>
                {
                  summaryByAi?.map((summary, i) => {
                    return (
                      <div key={i}>
                        <h2>Level: {summary}</h2>
                      </div>
                    )
                  })
                }
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Summary