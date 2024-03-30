import React from "react";

function Contact() {
  return (
    <div className="flex justify-center font-oxanium my-5 h-full sm:h-[70vh] items-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-5 mr-2 bg-gray-800 rounded-xl flex flex-col">
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact<span className="primary-color">Me</span>
            </h1>
            <p className="text-normal text-lg font-medium text-gray-400 mt-4">
              let's get in touch <br /> Send me an Email
            </p>
          </div>
          <form
            action=""
            method="post"
            className="px-6 pb-6 flex flex-col justify-center max-w-[700px]"
          >
            <div className="flex flex-col">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full name"
                className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col mt-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col mt-2">
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="Your message"
                className="w-100 mt-2 px-3 py-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-3 px-6 rounded-lg mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
