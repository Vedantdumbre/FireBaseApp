import React from 'react';

const Navbar = () => {
  return (
    <div className='my-4 h-[80px] bg-white rounded-lg gap-2 font-medium text-xl flex items-center justify-center text-center'>
      <img src="public/firebase.svg" alt="logo" className='h-10 mr-2' /> 
      <h1 className='text-center'>FireBase Contact App</h1>
    </div>
  );
}

export default Navbar;