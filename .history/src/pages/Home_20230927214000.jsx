import React from "react";
import Slider from "../components/Slider";
import { useState } from "react";

export default function Home() {
  const [offerListings, setOfferListings] = useState(null);
  return (
    <div>
      <Slider />
    </div>
  );
}
