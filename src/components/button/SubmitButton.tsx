import React from "react";
import { Button } from "../ui/button";

const SubmitButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <Button className={className} type="submit">
      {children}
    </Button>
  );
};

export default SubmitButton;
