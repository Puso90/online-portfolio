import React from 'react';

const FooterLink = ({ href, target = "_self", rel = "", children }) => {
  return (
    <div className="flex flex-grow text-center justify-center items-center">
      <a
        className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900"
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
      {target === "_blank" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-4 w-4"
        >
          <title>Opens in a new window</title>
        </svg>
      )}
    </div>
  );
};

export default FooterLink;