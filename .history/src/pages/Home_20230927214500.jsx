import React from "react";
import Slider from "../components/Slider";
import { useState } from "react";
import { useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const [offerListings, setOfferListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        const listingsRef = collection(db, "listings");
      } catch (error) {}
    }
    fetchListings();
  }, []);
  return (
    <div>
      <Slider />
    </div>
  );
}
