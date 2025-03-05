import React, { useState, useRef, useEffect } from "react";

const LottoNumbersApp = () => {
  const [showIframe, setShowIframe] = useState(false);
  const iframeContainerRef = useRef(null);

  // Close iframe when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (iframeContainerRef.current && !iframeContainerRef.current.contains(event.target)) {
        setShowIframe(false);
      }
    };

    if (showIframe) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [showIframe]);

  return (
    <div className="p-5 w-full max-w-[800px] mx-auto relative">
      {/* Button to Show Iframe */}
      <button
        className="text-blue-600 underline"
        onClick={(e) => {
          e.stopPropagation(); // Prevents the close logic from triggering
          setShowIframe(true);
        }}
      >
        LOTTO NUMBER APP
      </button>

      {/* Iframe Container */}
      {showIframe && (
        <div
          ref={iframeContainerRef}
          className="border border-gray-300 shadow-md mt-5 rounded-lg overflow-hidden relative bg-white"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600 z-10"
            onClick={() => setShowIframe(false)}
            style={{ right: "10px" }}
          >
            ✖ Close
          </button>

          {/* Embedded Lotto Numbers App */}
          <iframe
            src="https://puso90.github.io/Lotto-Numbers-App/"
            width="100%"
            height="400px"
            className="border-0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default LottoNumbersApp;
