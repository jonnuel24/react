import React from "react";
import Logo from "../asset/images/logo.svg";

function EmailTemplate() {
  return (
    <div className="flex justify-center items-center w-full h-[100%] bg-gray-100">
      <div className="max-w-[640px] bg-gradient-to-b from-[#3A9F45] to-[#155840] h-fit space-y-[32px]">
        <div className="bg-white mx-auto flex items-start justify-center py-4">
          <img src={Logo} alt="" />
        </div>

        {/* body */}
        <div className="px-8">
          <div className="py-8 px-6 sm:px-16 border-[8px] space-y-24 border-[#1E8A5E] bg-white">
            <div className=" flex flex-col space-y-8 items-start">
              <header className="text-[24px] text-left font-semibold">
                Agripeller Account Verificatiion
              </header>
              <div className="space-y-2">
                <header className="text-left text-[16px] font-semibold">
                  Hello (username){" "}
                </header>
                <p className="text-left text-[14px] font-normal">
                  “Thank you for registering with [Company Name]. Please verify
                  your email address by entering the OTP (One-Time Password)
                  below. This helps us ensure that we have the correct email
                  address for your account."
                </p>
              </div>
              <div className="w-full">
                <legend className="text-[20px] font-medium text-left">
                  Your OTP Code
                </legend>
                <div className="bg-[#E32B51] w-full h-fit text-center text-white py-2 rounded-md text-[24px] font-semibold">
                  123 456
                </div>
                <h4 className="mt-2 text-[14px] text-left font-normal">
                  Enter this code in the verification page to complete your
                  registration.
                </h4>
              </div>
              <div className="text-[14px] font-normal">
                "If you did not create an account, no further action is
                required."
              </div>
            </div>
            <div className="">
              <div className="h-[1px] w-full bg-black"></div>
              <h5 className="text-[14px] font-normal">
                {" "}
                "If you have any questions, feel free to contact our support
                team at [support email address]."
              </h5>
              <h5 className="text-[14px] font-normal">
                "Thank you, [Company Name] Team"
              </h5>
            </div>
          </div>
        </div>
        <div className="mx-auto py-4">
          <div className="text-lg font-bold text-white">THANK YOU</div>
        </div>
      </div>
    </div>
  );
}

export default EmailTemplate;
