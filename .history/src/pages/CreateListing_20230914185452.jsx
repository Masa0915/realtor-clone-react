import React from "react";

export default function CreateListing() {
  function onChange() {}
  return (
    <main className="max-w-md">
      <h1 className="text-3xl text-center">Create a Listing</h1>
      <form action="">
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className="px-7 py-3 font-medium text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg duration-150 ease-in-out"
          >
            sell
          </button>
        </div>
      </form>
    </main>
  );
}
