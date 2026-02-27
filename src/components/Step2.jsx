import { useState } from "react";

export default function Step2({ methods, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = methods;

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const email = watch("email");

  const handleNext = async () => {
    const valid = await trigger(["email", "password", "confirmPassword"]);
    if (valid) nextStep();
  };

  const isDisabled = !email || !password || !confirmPassword;

  return (
    <div>
      {/* EMAIL */}
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p className="error">{errors.email.message}</p>}

      {/* PASSWORD */}
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
      </div>
      {errors.password && (
        <p className="error">{errors.password.message}</p>
      )}

      {/* CONFIRM PASSWORD */}
      <input
        type={showPassword ? "text" : "password"}
        {...register("confirmPassword")}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      {/* TOGGLE */}
      <button
        type="button"
        onClick={() => setShowPassword((s) => !s)}
        style={{ marginBottom: "15px" }}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="button" onClick={prevStep}>
          Back
        </button>

        <button type="button" onClick={handleNext} disabled={isDisabled}>
          Next
        </button>
      </div>
    </div>
  );
}