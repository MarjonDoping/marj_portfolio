import React from "react";

export const MainButton = ({ children }) => {
  return (
    <button className="bg-violet-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-800 ">
      {children}
    </button>
  );
};


export const SecondaryButton = ({ children }) => {
  return (
    <button
      className="text-white font-semibold py-2 px-4 rounded bg-gradient-to-r from-teal-400 to-green-600 hover:from-pink-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
      style={{
        backgroundImage: 'linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)',
      }}
    >
      {children}
    </button>
  );
};



export const NoOutlinedButton = ({ children }) => {

  const gradientStyle = {
    background: 'linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)',
  };

  return (
   <button className="relative inline-flex items-center justify-center p-0 overflow-hidden text-m font-medium text-white rounded-lg group hover:text-white dark:text-white mx-4 focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" style={gradientStyle}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-black rounded- group-hover:bg-opacity-0">
        {children}
      </span>
    </button>
  );
};

export const NoOutlinedButton1 = ({ children }) => {

  const gradientStyle = {
    background: 'linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)',
  };

  return (
   <button className="relative inline-flex p-0 mb-3 me-2 overflow-hidden text-m font-medium text-black rounded-lg group hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" style={gradientStyle}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-white rounded-md group-hover:bg-opacity-0">
        {children}
      </span>
    
    </button>
  );
};

export const NoOutlinedButton2 = ({ children }) => {
  return (
    <button className="p-2 text-white">
      {children}
    </button>
  );
};

export const NoGapButton = ({ children }) => {

  const gradientStyle = {
    background: 'linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)',
  };

  return (
   <button className="relative inline-flex  overflow-hidden text-m font-medium text-white rounded-lg group hover:text-white dark:text-white  focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" style={gradientStyle}>
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-black rounded- group-hover:bg-opacity-0">
        {children}
      </span>
    </button>
  );
};






