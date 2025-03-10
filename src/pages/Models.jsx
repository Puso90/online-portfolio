import React from "react";
import YourCater from "../components/YourCater"; // Import YourCater
import LottoNumbersApp from "../components/LottoNumbersApp"; // Import new component

const Models = () => {
  return (
    <div className="flex w-full overflow-hidden h-screen flex-col items-center justify-center">
      {/* Header */}
      <div className="w-full p-2 flex items-center lg:justify-center border-b-1 border border-color-[#420420]">
        <h1 className="pl-2 font-bold text-[28px] w-[80%]">Puso Ramoroa</h1>
        <a
          className="w-[20%] text-right hidden lg:block"
          href="mailto:pusoramoroa@yahoo.com"
        >
          pusoramoroa@yahoo.com
        </a>
      </div>

      {/* Models List */}
      <div className="w-full max-w-full h-screen overflow-hidden flex flex-col">
        <div className="p-5 overflow-x-scroll">
          <h2 className="text-lg mb-2 font-semibold">
            Here are a list of models:
          </h2>
          <ul className="italic block">
            <li className="flex items-center">
              <span>♦</span>
              <LottoNumbersApp />
            </li>
            <li className="flex items-center">
              <span>♦</span>
              <YourCater />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Models;
