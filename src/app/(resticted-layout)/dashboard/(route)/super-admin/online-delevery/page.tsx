import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import DailyDelevery from "./DailyDelevery";

const OnlineOrder = () => {
  return (
    <div>
      <div className="flex gap-2 lg:ml-6 my-3">
        <Button disabled className="ml-2">
          Daily Delevery
        </Button>
        <Link href="/dashboard/super-admin/online-delevery/monthly-delevery">
          <Button>Monthly Delevery</Button>
        </Link>
      </div>
      <DailyDelevery />
    </div>
  );
};
export default OnlineOrder;
