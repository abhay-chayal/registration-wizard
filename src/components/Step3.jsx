export default function Step3({ methods, prevStep }) {
  const { handleSubmit, getValues } = methods;

  const onSubmit = (data) => {
    console.log("FINAL DATA:", data);
    alert(" Success! Check console.");
  };

  const data = getValues();

  return (
    <div>
      <h3>Review Your Info</h3>

      <p><b>Name:</b> {data.firstName} {data.lastName}</p>
      <p><b>DOB:</b> {data.dob}</p>
      <p><b>Email:</b> {data.email}</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="button" onClick={prevStep}>
          Back
        </button>

        <button type="button" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </div>
    </div>
  );
}