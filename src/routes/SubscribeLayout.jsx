import React from "react";
import { SubscribeBanner } from "@/components/Paddle/SubscribeBanner";
import {StripeSubscribeBanner} from "@components/Paddle/StripeSubscribeBanner.jsx";

const SubscribeLayout = () => {
  return (
    // <div className='container'>
    //   <SubscribeBanner />
      <StripeSubscribeBanner/>
    // </div>
  );
};

export default SubscribeLayout;
