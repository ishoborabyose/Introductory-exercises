import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`hello ${formData.firstName} ${formData.lastName} !`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-2xl m-auto gap-3 items-center mt-10"
    >
      <input
        className="border border-b-lime-200 py-2 px-3"
        type="text"
        onChange={handleChange}
        placeholder="First Name"
        name="firstName"
        value={FormData.firstName}
      />
      <input
        className="border border-b-lime-200 py-2 px-3"
        type="text"
        onChange={handleChange}
        placeholder="Last Name"
        name="lastName"
        value={FormData.lastName}
      />

      <button className="py-1 px-4 border text-white bg-red-400">
        Greet Me
      </button>
    </form>
  );
};

export default Form;
