import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact({ userRef, listing }) {
  const [Landlord, setLandlord] = useState(null);
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    }
    getLandlord();
  }, [userRef]);
  return (
    <div>
      {Landlord !== null && (
        <div className="div">
          <p>
            Contact {Landlord.name} the {listing.name.toLowerCase()}
          </p>
          <div>
            <textarea name="message" id="message" rows="2"></textarea>
          </div>
        </div>
      )}
    </div>
  );
}
