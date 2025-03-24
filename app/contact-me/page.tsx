import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-img1.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      
        <div className="absolute top-50 left-60 w-[20%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    
  );
};

export default Page;
