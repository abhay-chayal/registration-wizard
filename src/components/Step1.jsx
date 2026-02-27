export default function Step1({ methods, nextStep }) {
  const {
    register,
    formState: { errors },
    trigger,
  } = methods;

  const handleNext = async () => {
    const valid = await trigger(["firstName", "lastName", "dob"]);
    if (valid) nextStep();
  };

  return (
    <div>
      <input {...register("firstName")} placeholder="First Name" />
      {errors.firstName && (
        <p className="error">{errors.firstName.message}</p>
      )}

      <input {...register("lastName")} placeholder="Last Name" />
      {errors.lastName && (
        <p className="error">{errors.lastName.message}</p>
      )}

      <input type="date" {...register("dob")} />
      {errors.dob && (
        <p className="error">{errors.dob.message}</p>
      )}

      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}