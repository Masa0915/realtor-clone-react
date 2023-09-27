import React from "react";
import Slider from "../components/Slider";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, limit, orderBy, query } from "firebase/firestore";

export default function Home() {
  useEffect(() => {
    async function fetchListings() {
      const listingRef = collection(db, "listings");
      const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
    }
    fetchListings();
  }, []);
  return (
    <div>
      <Slider />
    </div>
  );
}
