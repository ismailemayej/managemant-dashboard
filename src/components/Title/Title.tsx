import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
  right?: React.ReactNode | string;
  modal?: React.ReactNode | string;
}
const Title = ({ title, subtitle, right, modal }: TitleProps) => {
  return (
    <div className="flex justify-between my-2">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
      <div className="flex gap-1">
        {right && (React.isValidElement(right) ? right : <div>{right}</div>)}
        {modal && (React.isValidElement(right) ? modal : <div>{modal}</div>)}
      </div>
    </div>
  );
};
export default Title;
