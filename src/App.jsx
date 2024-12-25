import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import Model from "./components/Model";
const App = () => {
  const [contact, setContact] = useState([]);

  const [isOpen,setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }


  const onClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactRef = collection(db, "contact");
        const contactSnapshot = await getDocs(contactRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContact(contactLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContact();
  }, []);

  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="text-white text-2xl absolute ml-1" />
          <input
            type="text"
            className="flex-grow h-10 bg-transparent text-white pl-8 border border-white rounded-md"
          />
        </div>

        <AiFillPlusCircle className="text-5xl text-white cursor-pointer" />
      </div>
      <div className="mt-4 gap-3 flex flex-col" >
        {contact.map((contact) => (
          <div key={contact.id} className="bg-yellow flex items-center justify-around rounded-lg p-2 ">
            <div className="flex items-center justify-between gap-1 " >
              <HiOutlineUserCircle className="text-orange text-4xl" />
              <div className="">
                <h1 className="font-medium">{contact.Name}</h1>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-3xl" >
              <IoMdTrash className="text-orange" />
              <RiEditCircleLine />
            </div>
          </div>
        ))}
      </div>
    </div>
    <Model isOpen={isOpen}  onClose={onClose} >
      hi
    </Model>
    </>
  );
};

export default App;
