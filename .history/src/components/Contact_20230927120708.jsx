import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact({ userRef, listing }) {
  const [Landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
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
  function onChange(e) {
    setMessage(e.target.value);
  }
  return (
    <div>
      {Landlord !== null && (
        <div className="div">
          <p>
            Contact {Landlord.name} the {listing.name.toLowerCase()}
          </p>
          <div>
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
            ></textarea>
          </div>
          <a
            href={`mailto:${Landlord.email}?Subject=${listing.name}&body=${message}`}
          >
            <button>Send Message</button>
          </a>
        </div>
      )}
    </div>
  );
}
