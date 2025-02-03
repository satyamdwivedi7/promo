import { useState } from "react";

function Form() {

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <div className="w-screen h-screen flex justify-center flex-col ">

      
      <div className="flex  font-bold text-[3rem] w-[90%] border-b-2 m-auto ">
        <img className="w-1/10 p-6" src="/ProMo.svg" alt="logo" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-10 p-10 h-[35rem]">
        <h3 className="text-[3.5rem]">Tell Us about yourself!</h3>
        <h5 className="text-[2.5rem]">What's your company's name?</h5>
        
        {/* Input Field with Bigger Size */}
        <div className="p-5 w-[30rem]">
          <input 
            type="text" 
            className="border-2 border-gray-300 p-4 w-full h-12 bg-orange-200 text-lg rounded-md"
          />
        </div>

        {/* Button */}
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-md text-lg w-1/8">
          NEXT
        </button>
      </div>
      </div>
    </div>
  );
}

export default Form;
