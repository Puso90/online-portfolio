import React from 'react';
import '../index.css';

const Models = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="font-bold text-[32px] mb-7">Models Page</h1>
      <p className="mb-7">This is the Models page.</p>
      <div className="w-full max-w-6xl overflow-x-auto bg-white shadow-md rounded-lg">
        {/* Embed Google Sheets iframe with 30% height */}
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNuUpoXxwLj2TDmAY1DVq8c3ntPU7VY4XtCG_AdeHpNo5akBiXiSJK3L1ZbxtEOTtZlf2SVgowgK7H/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-[100vh] border-none"
          title="Google Sheets Data"
        ></iframe>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        For very large datasets, consider adding pagination or lazy loading to improve performance.
      </div>
    </div>
  );
};

export default Models;