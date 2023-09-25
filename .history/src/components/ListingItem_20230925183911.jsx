import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { list } from "firebase/storage";

export default function ListingItem({ listing, id }) {
  return (
    <li>
      <Link to={`/category/${listing.type}/${id}`}>
        <img src={listing.imgUrls[0]} alt="" />
        <Moment fromNow>{listing.timestamp?.toDate()}</Moment>
        <div className="">
          <div className="">
            <MdLocationOn />
            <p>{listing.address}</p>
          </div>
          <p>{listing.name}</p>
          <p>${listing.offer ? listing.discountedPrice}</p>
        </div>
      </Link>
    </li>
  );
}
