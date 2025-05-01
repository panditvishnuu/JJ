import React from "react";
import { cn } from "@/lib/utils";

const FormInput = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-6 py-4 bg-white rounded shadow-md focus:outline-none placeholder:text-gray-400 placeholder:text-lg",
        className
      )}
      {...props}
    />
  );
};

export default FormInput;