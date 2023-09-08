import React from "react";

export default function SignIn() {
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">SignIn</h1>
      <div>
        <div className="md:w-[67%] lg:w-[50%] mb-12 mb:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex justify-center">
          <form className="w-full md:w-[67%] lg:w-[40%] mb-12 md:mb-6">
            <input type="text" />
          </form>
        </div>
      </div>
    </section>
  );
}
