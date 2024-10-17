import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CommonButtonProps {
  children: React.ReactNode;
  className?: string;
  link: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  link,
}) => {
  return (
    <div className="mx-8">
      <Link href={link}>
        <Button className={className}>{children}</Button>
      </Link>
    </div>
  );
};

export default CommonButton;
