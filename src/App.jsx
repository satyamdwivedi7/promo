import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
      {/* Header */}
      <div className="w-screen h-screen">

      
      <div className="flex flex-col font-bold text-[3rem] w-full border-b-2">
        <p className="m-[1rem]">Promo</p>
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

export default App;
