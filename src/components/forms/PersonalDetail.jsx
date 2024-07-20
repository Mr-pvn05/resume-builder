import { useResumeContext } from '@/context/ResumeInfoContext';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useParams } from 'react-router-dom';
import { updateResumeDetails } from '../../../service/global.api.js';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';

const PersonalDetail = ({setNextButton}) => {

    const {resumeId} = useParams();
    const {resumeInfo, setResumeInfo} = useResumeContext();
    const [formData, setFormData] = useState()
    const [loading, setLoading] = useState(false);
    const { toast } = useToast()

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
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
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-t-primary my-4'>
        <h2 className='font-bold text-lg'>Personal Details</h2>
        <p>Get started with basis information</p>
        <form onSubmit={handleSubmit} action="">
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'>First Name</label>
                    <Input defaultValue={resumeInfo?.firstName} name="firstName" onChange={eventHandler} required type="text" />
                </div>
                <div>
                    <label className='text-sm'>Last Name</label>
                    <Input defaultValue={resumeInfo?.lastName} name="lastName" onChange={eventHandler} type="text" />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Job Title</label>
                    <Input defaultValue={resumeInfo?.jobTitle} name="jobTitle" onChange={eventHandler} required type="text" />
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'>Address</label>
                    <Input defaultValue={resumeInfo?.address} name="address" onChange={eventHandler} required type="text" />
                </div>
                <div>
                    <label className='text-sm'>Phone No.</label>
                    <Input defaultValue={resumeInfo?.phone} name="phone" onChange={eventHandler} required type="number" />
                </div>
                <div>
                    <label className='text-sm'>Email</label>
                    <Input defaultValue={resumeInfo?.email} name="email" onChange={eventHandler} required type="email" />
                </div>
            </div>
            <div className='mt-4 flex justify-end'>
                <Button disabled={loading} type="submit">{loading ? <LoaderCircle className="animate-spin mx-1" /> : "Save"}</Button>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetail