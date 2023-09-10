import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function OAuth() {
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      toast.error("sorry");
    }
  }
  return (
    <button
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3"
      onClick={onGoogleClick}
      type="button"
    >
      <FcGoogle />
      Continue with Google
    </button>
  );
}
