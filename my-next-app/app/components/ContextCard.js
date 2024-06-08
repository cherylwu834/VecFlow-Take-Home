import React from "react";

const ContextCard = ({ title, date, quote }) => {
  return (
    <div className="max-w-lg p-4 bg-white border rounded-md shadow-sm mt-5">
      <h1 className="text-2xl font-semibold text-dark-purple">{title}</h1>
      <p className="text-sm text-slate-500">{date}</p>
      <p className="mt-2 text-base text-slate-700">{quote}</p>
    </div>
  );
};

export default ContextCard;