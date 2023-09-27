import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact({ userRef, listing }) {
  const [Landlord, setLandlord] = useState(null);
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "listings", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    }
    getLandlord();
  }, [userRef]);
  return <div>Contact</div>;
}
