import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchListings() {
      try {
      } catch (error) {
        toast.error("Could not fetch Listings");
      }
    }
    fetchListings();
  }, []);
  return <div>Offers</div>;
}
