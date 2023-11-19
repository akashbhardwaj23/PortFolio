import React from "react";

function Input({name, type, placeholder}) {
  return (
    <div className="mb-16">
      <label
        htmlFor={name}
        className="text-gray-600 text-2xl tracking-wide font-bold mb-4 block text-left"
      >
        {name}
      </label>
      { name == 'Message'? <textarea cols={30} rows={10} placeholder={placeholder} name={name} className="placeholder:opacity-100 placeholder:text-gray-600 placeholder:font-semibold placeholder:text-2xl text-gray-600 p-8 w-full text-2xl tracking-normal rounded-md font-semibold inputField outline-none "></textarea>:<input
        type={type}
        id={name}
        required
        placeholder={placeholder}
        className="placeholder:opacity-100 placeholder:text-gray-600 placeholder:font-semibold placeholder:text-2xl text-gray-600 p-8 w-full text-2xl tracking-normal rounded-md font-semibold inputField outline-none "
      />}
    </div>
  );
}

export default Input;
