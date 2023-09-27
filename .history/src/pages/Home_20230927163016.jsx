import React from "react";
import Slider from "../components/Slider";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";

export default function Home() {
  const [listings, setListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      const listingRef = collection(db, "listings");
      const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
    }
    fetchListings();
  }, []);
  return (
    <div>
      <Slider />
    </div>
  );
}
