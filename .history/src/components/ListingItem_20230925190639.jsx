import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { list } from "firebase/storage";

export default function ListingItem({ listing, id }) {
  return (
    <li className="bg-white flex flex-col">
      <Link to={`/category/${listing.type}/${id}`}>
        <img src={listing.imgUrls[0]} alt="" />
        <Moment fromNow>{listing.timestamp?.toDate()}</Moment>
        <div className="">
          <div className="">
            <MdLocationOn />
            <p>{listing.address}</p>
          </div>
          <p>{listing.name}</p>
          <p>
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && "/ month"}
          </p>
          <div className="">
            <div className="">
              <p>
                {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
              </p>
            </div>
            <div>
              <p>
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : "1 Bath"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
