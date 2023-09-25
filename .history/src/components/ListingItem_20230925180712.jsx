import React from "react";
import { Link } from "react-router-dom";

export default function ListingItem({ listing, id }) {
  return (
    <li>
      <Link to={`/category/${listing.type}/${id}`}></Link>
    </li>
  );
}
