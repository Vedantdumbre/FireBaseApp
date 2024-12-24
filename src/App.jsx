import React from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
const App = () => {
  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2" >
        <div className="flex relative items-center flex-grow">
          <FiSearch className="text-white text-2xl absolute ml-1" />
          <input
            type="text"
            className="flex-grow h-10 bg-transparent text-white pl-8 border border-white rounded-md"
          />
        </div>
       
          <AiFillPlusCircle className="text-5xl text-white cursor-pointer" />
       
      </div>
    </div>
  );
};

export default App;
