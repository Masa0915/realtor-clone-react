import React, { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "Sahand",
    email: "sahand.gha@gmail.com",
  });

  const { name, email } = formData;
  return (
    <>
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold">My profile</h1>
        <div className="w-full md:w-[50%]">
          <form action="">
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
          </form>
        </div>
      </section>
    </>
  );
}
