import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, target = "_self", rel = "", children }) => {
  return (
    <div className="flex flex-grow text-center justify-center items-center">
      <Link
        className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900"
        to={to}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
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

const Footer = () => {
  return (
    <footer className="w-full pb-2 py-4 h-[250px] md:py-0 md:h-[90px] md:min-h-[90px] border-t border-[#eaeaea]">
      <div className="flex h-full flex-col md:flex-row justify-center pl-3 md:pl-0 items-start md:items-center">
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/models">Models</FooterLink>
        <FooterLink to="https://twitter.com/gustavreagile" target="_blank" rel="noopener noreferrer">
          Twitter
        </FooterLink>
        <FooterLink to="https://github.com/Puso90" target="_blank" rel="noopener noreferrer">
          Github
        </FooterLink>
        <FooterLink
          to="https://puso90.github.io/Lotto-Numbers-App/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lotto Numbers Software
        </FooterLink>
        <FooterLink to="https://discord.gg/6KMfmMfZ" target="_blank" rel="noopener noreferrer">
          Discord
        </FooterLink>
      </div>
    </footer>
  );
};

export default Footer;