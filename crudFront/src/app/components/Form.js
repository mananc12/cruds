// components/Form.js
"use client";
import { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hobby: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    hobby: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when user starts typing
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate Phone Number
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number";
      valid = false;
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Validate Hobby (assuming it is required)
    if (!formData.hobby.trim()) {
      newErrors.hobby = "Hobby is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if the form is not valid
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/save",
        formData
      );

      //changing the state of state and sending in Home
      props.refresh(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        hobby: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white">
      <div className="grid gap-4 w-[500px] rounded-2xl border-4 border-solid border-black p-10">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-solid border-black border-b-2"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-solid border-black border-b-2"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-solid border-black border-b-2"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hobby:
          </label>
          <input
            type="text"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-solid border-black border-b-2"
          />
          {errors.hobby && <p className="text-red-500">{errors.hobby}</p>}
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
