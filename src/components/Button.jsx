import React from "react";

// eslint-disable-next-line react/prop-types
export default function Button({ children, ...props }) {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <button
        {...props}
        className="px-4 py-2 tex-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        {children}
      </button>
    </>
  );
}
