
import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className='absolute h-screen bg-white flex justify-center items-center z-50 w-full'>
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    </div>
  );
};

export default Loader;
