import React from "react";

function Input({ type, label, require=false, className="" }) {
  return (
    <div className={`relative w-[95%] ${className}`}>
      <input
        type={type}
        id={label}
        className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-1 border-black-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:black-blue-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"
        placeholder=" "
        required={require}
      />
      <label
        htmlFor={label}
        className="absolute text-black-500 dark:text-black-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-transparent text-lg"
      >
        {label} {require && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
}

export default Input;
