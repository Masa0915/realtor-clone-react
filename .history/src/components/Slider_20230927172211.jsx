import React from "react";
import { useEffect } from "react";
import { db } from "../firebase";
import { Swiper } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper/core";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import Spinner from "../components/Spinner";
import "swiper/css/bundle";
export default function Slider() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
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
      setLoading(false);
    }
    fetchListings();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  if (listings.length === 0) {
    return <></>;
  }

  return (
    listings && (
      <>
        {listings.map((listing) => (
          <h1 key={listing.id}>{listing.data.imgUrls[0]}</h1>
        ))}
      </>
    )
  );
}
