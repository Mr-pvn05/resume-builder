import PersonalDetail from "@/components/forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useState } from "react";
import Summary from "@/components/forms/Summary";
import Experience from "@/components/forms/Experience";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [nextButton, setNextButton] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2"><LayoutGrid/>Theme</Button>
        <div className="flex gap-2">
          {
            activeFormIndex > 1 && <Button className="flex gap-1" size="sm" onClick={() => setActiveFormIndex((prev) => prev - 1)}><ArrowLeft/>Prev</Button>
          }
          <Button disabled={!nextButton} className="flex gap-1" size="sm" onClick={() => setActiveFormIndex((prev) => prev + 1)}>Next<ArrowRight/></Button>
        </div>
      </div>
      {activeFormIndex == 1 && <PersonalDetail setNextButton={setNextButton}/>}
      {activeFormIndex == 2 && <Summary setNextButton={setNextButton}/>}
      {activeFormIndex == 3 && <Experience setNextButton={setNextButton}/>}
    </div>
  ) 
};

export default FormSection;
