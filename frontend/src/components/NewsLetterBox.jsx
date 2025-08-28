import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Join our newsletter to receive exclusive updates, new arrivals, and
        special offers straight to your inbox. Don’t miss out on our latest
        trends and deals!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="text"
          className="w-full sm:flex-1 outline-none "
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
