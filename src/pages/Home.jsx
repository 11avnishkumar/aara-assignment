import { useState } from "react";
import VerificationInput from "../components/VerificationInput";
import PhoneNumberInput from "../components/PhoneNumberInput";
const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="mt-20 max-w-xl mx-auto">
      <div className="flex flex-col justify-center items-center  p-4 rounded-md h-[80vh]">
        <div className="w-full">
          <h1 className="mb-4 text-4xl font-semibold text-gray-400">
            {!isSubmitted ? "Enter Phone Number" : "One Time Password"}
          </h1>
          <form className="w-full">
            {!isSubmitted ? (
              <PhoneNumberInput
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                setIsSubmitted={setIsSubmitted}
              />
            ) : (
              <VerificationInput
                otp={otp}
                setOtp={setOtp}
                phoneNumber={phoneNumber}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
