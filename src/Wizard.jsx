import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function Wizard() {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const nextStep = () => setStep((p) => p + 1);
  const prevStep = () => setStep((p) => p - 1);

  const progress = (step / 3) * 100;

  return (
    <div className="app-container">
      <div className="card">
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 style={{ marginBottom: "20px" }}>
          Step {step} of 3
        </h2>

        {step === 1 && (
          <Step1 methods={methods} nextStep={nextStep} />
        )}

        {step === 2 && (
          <Step2
            methods={methods}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <Step3 methods={methods} prevStep={prevStep} />
        )}
      </div>
    </div>
  );
}