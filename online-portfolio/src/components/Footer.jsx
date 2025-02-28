import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="w-full pb-2 py-4 h-[250px] md:py-0 md:h-[90px] md:min-h-[90px] border-top-1 border border-color-[#eaeaea]">
      <div className="flex h-full flex-col md:flex-row justify-center pl-3 md:pl-0 items-start md:items-center">
        <div className="flex flex-grow text-center justify-center items-center">
          <a className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900" href="/">Home</a>
        </div>
        <div className="flex flex-grow text-center justify-center items-center">
          <a className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900" href="/models">Models</a>
        </div>
        <div className="flex flex-grow text-center justify-center items-center">
          <a className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900" href="https://twitter.com/gustavreagile" target="_blank" rel="noreferrer nofollow">Twitter</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4">
            <title>Opens in a new window</title>
          </svg>
        </div>
        <div className="flex flex-grow text-center justify-center items-center">
          <a className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900" href="https://github.com/Puso90" target="_blank" rel="noreferrer nofollow">Github</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4">
            <title>Opens in a new window</title>
          </svg>
        </div>
        <div className="flex flex-grow text-center justify-center items-center">
          <a className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900" href="https://puso90.github.io/Lotto-Numbers-App/" target="_blank" rel="noreferrer nofollow">Lotto Numbers Software</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4">
            <title>Opens in a new window</title>
          </svg>
        </div>
        <div className="flex flex-grow text-center justify-center items-center">
          <a className="font-semibold py-1 md:py-0 text-slate-500 hover:text-slate-900" href="https://discord.gg/6KMfmMfZ" target="_blank" rel="noreferrer nofollow">Discord</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4">
            <title>Opens in a new window</title>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;