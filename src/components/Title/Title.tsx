import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
  right?: React.ReactNode | string;
}
const Title: React.FC<TitleProps> = ({ title, subtitle, right }) => {
  return (
    <div className="flex justify-between my-2">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
      {right && (React.isValidElement(right) ? right : <div>{right}</div>)}
    </div>
  );
};
export default Title;
