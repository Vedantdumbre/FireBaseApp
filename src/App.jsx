import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import {useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import {collection,getDocs} from "firebase/firestore"
import { db } from "./config/firebase";
const App = () => {

  const [contact,setContact] = useState([]);

  useEffect(() => {
    const getContact = async() =>{
      try {
        const contactRef = collection(db,"contact") ;
        const contactSnapshot = await getDocs(contactRef);
        console.log(contactSnapshot);

      } catch (error) {
        console.log(error);
      }
      
    };

    getContact();
  },[]);

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
