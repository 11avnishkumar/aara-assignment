import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import Button from "../components/Button";
import axios from "axios";
const PhoneNumberInput = ({ phoneNumber, setPhoneNumber, setIsSubmitted }) => {
  const handlePhoneNumber = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://storebh.bhaaraterp.com/api/login/",
        { mobile_number: phoneNumber.slice(2) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.data.response_code === 200) {
        toast.success(res.data.message);
        setIsSubmitted(true);
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      setIsSubmitted(false);
    }
  };
  return (
    <div className="space-y-4">
      <PhoneInput
        country={"in"}
        value={phoneNumber}
        onChange={setPhoneNumber}
        className="mb-4"
      />
      <Button
        defaultButtonType={false}
        className={
          "bg-black text-white text-md px-3 py-4 block w-full cursor-pointer text-lg rounded-md"
        }
        onClick={handlePhoneNumber}
        buttonText={"Verify Your Mobile Number"}
      />
    </div>
  );
};

export default PhoneNumberInput;
