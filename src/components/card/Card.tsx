import React from "react";

interface CardProps {
  title: string;
  text: string | any;
}
const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div className="lg:w-72 w-64 h-32 rounded-xl border pb-6 my-2 bg-gradient-to-r dark:from-slate-900 dark:to-orange-900 dark:border dark:border-gray-600 from-green-600 to-red-400 text-amber-100 border-orange-600 ">
      <div className="m-4">
        <h1 className=" text-lg">{title}</h1>
        <h1 className="text-4xl font-bold mt-2">{text}</h1>
      </div>
    </div>
  );
};

export default Card;
