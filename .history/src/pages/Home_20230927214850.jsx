import React from "react";
import Slider from "../components/Slider";
import { useState } from "react";
import { useEffect } from "react";
import { collection, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const [offerListings, setOfferListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc")
        );
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
