import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";

export default function Contact({ userRef, listing }) {
  const [Landlord, setLandlord] = usesta1(null);
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "listings", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
      }
    }
    getLandlord();
  }, []);
  return <div>Contact</div>;
}
