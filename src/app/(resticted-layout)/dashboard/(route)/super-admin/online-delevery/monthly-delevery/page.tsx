import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { MonthlyDeleveryDataTable } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/monthly-delevery-data-table";
import { tasks } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/online-delevery/monthly-delevery-table/columns";

const MonthlyPage = () => {
  return (
    <div>
      <div className="flex gap-2 lg:ml-6 my-3">
        <Link className="ml-2" href="/dashboard/super-admin/online-delevery">
          <Button>Daily Delevery</Button>
        </Link>
        <Button disabled>Monthly Delevery</Button>
      </div>
      <MonthlyDeleveryDataTable data={tasks} columns={columns} />
    </div>
  );
};

export default MonthlyPage;
