import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <main className="py-5 h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-[32px] mb-7">Puso Ramoroa</h1>
      <a className="text-center" href="mailto:pusoramoroa@yahoo.com">pusoramoroa@yahoo.com</a>
    </main>
  );
};

export default Header;