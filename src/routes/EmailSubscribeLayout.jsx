import React from "react";
import { EmailInput } from "@/components/Stripe/EmailInput";
import { useNavigate } from "react-router-dom";

const EmailSubscribeLayout = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/subscribe");
  };

  return (
    <div className='container'>
      <EmailInput onNext={handleNext} />
    </div>
  );
};

export default EmailSubscribeLayout;
