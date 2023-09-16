import React from "react";

export default function CreateListing() {
  return (
    <main className="max-w-md">
      <h1 className="text-3xl text-center">Create a Listing</h1>
      <form action="">
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="">
          <button type="button" id="type" value="sale">
            sell
          </button>
        </div>
      </form>
    </main>
  );
}
