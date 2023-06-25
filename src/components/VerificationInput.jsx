import React from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";

import axios from "axios";

const VerificationInput = ({ otp, setOtp, phoneNumber }) => {
  const navigate = useNavigate();
  const VerifyOtpNumber = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://storebh.bhaaraterp.com/api/verify-login-otp/",
        {
          mobile_otp: otp,
          mobile_number: phoneNumber.slice(2),
          type: "web",
          registration_token: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(res); // debug purpose
      if (res.data.response_code === 200) {
        toast.success(res.data.message);
        // save the token in Browser
        localStorage.setItem("login_token", res.data.token);
        navigate("/profile");
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        shouldAutoFocus={true}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputType="tel"
        inputStyle={
          "mb-4 text-black rounded-md  !w-full !h-full py-4 text-xl block"
        }
        containerStyle={"w-full flex justify-center items-center"}
      />
      <Button
        defaultButtonType={false}
        className={
          "bg-black text-white text-md px-3 py-4 block w-full cursor-pointer text-lg rounded-md"
        }
        onClick={VerifyOtpNumber}
        buttonText={"Verify One Time Password"}
      />

      <a href="/" className="text-lg text-blue-600 text-center block py-4">
        Back to Login
      </a>
    </>
  );
};

export default VerificationInput;
