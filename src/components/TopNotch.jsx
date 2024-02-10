import React from "react";

const TopNotch = () => {
  return (
    <>
      <div className=" mx-auto mb-7 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Stranger&apos;s Hub!
        </p>
      </div>
      <h1 className="max-w-5xl text-center m-auto text-4xl font-bold lg:text-5xl md:text-4xl">
        Search user&apos;s profile
        <span className="text-blue-600"> dynamically</span> in seconds.
      </h1>
      <p className="mt-6 text-center m-auto max-w-prose text-zinc-700 sm:text-lg">
        Simply type random name and then hit on search right away!
      </p>
    </>
  );
};

export default TopNotch;
