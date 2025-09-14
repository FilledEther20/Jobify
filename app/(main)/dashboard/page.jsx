import { getUserOnboardingStatus } from "@/actions/user";
import React from "react";
import { redirect } from "next/navigation";

const IndustryInsights=async ()=>{
      const isOnboarded  = await getUserOnboardingStatus();
      if(!isOnboarded){
        redirect('/onboarding')
      }
    return(
        <>
        </>
    )
}

export default IndustryInsights