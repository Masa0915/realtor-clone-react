import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3">
      <FcGoogle />
      Continue with Google
    </button>
  );
}
