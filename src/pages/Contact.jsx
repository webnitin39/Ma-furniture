import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null)
  const [message, setMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  setMessage("Your enquiry form has been submitted successfully!");
   formRef.current.reset();
};
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-center text-3xl font-bold md:text-4xl">
          Contact <span className="text-[#c49a6c]">Ma Furniture</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Have a question about our furniture? Send us an enquiry and
          we will help you find the right furniture for your home.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-5 text-2xl font-semibold">
              Get in Touch
            </h2>

            <p className="mb-4 text-gray-600">
              We are here to help you choose the right furniture.
            </p>

            <p className="mb-3">
              <strong>Brand:</strong> Ma Furniture
            </p>

            <p className="mb-3">
              <strong>Email:</strong> mafurniture05@gmail.com 
            </p>

            <p className="mb-3">
              <strong>Phone:</strong> +91 91315 24019
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Contact details can be updated when the website is
              prepared for a real business.
            </p>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-5 text-2xl font-semibold">
              Send an Enquiry
            </h2>

          <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
  <div>
    <label className="mb-1 block font-medium">Full Name</label>
    <input
    onChange={()=>setMessage("")}
      type="text"
      placeholder="Enter your name"
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c49a6c]"
      required
    />
  </div>

  <div>
    <label className="mb-1 block font-medium">Email Address</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c49a6c]"
      required
    />
  </div>

  <div>
    <label className="mb-1 block font-medium">Phone Number</label>
    <input
      type="tel"
      placeholder="Enter your phone number"
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c49a6c]"
      required
    />
  </div>

  <div>
    <label className="mb-1 block font-medium">Message</label>
    <textarea
      placeholder="Tell us which furniture you are interested in..."
      rows="4"
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#c49a6c]"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full rounded-lg bg-[#c49a6c] px-6 py-3 font-semibold text-white transition hover:bg-[#ad8054]"
  >
    Send Enquiry
  </button>
</form>
{message && (
  <p className="mt-4 text-center text-green-600">
    {message}
  </p>
)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;