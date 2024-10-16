import React from "react";
import { DailyDeleveryDataTable } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/daily-delevery-data-table";
import { tasks } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/columns";

const DailyDelevery = () => {
  return (
    <div>
      <DailyDeleveryDataTable columns={columns} data={tasks} />
    </div>
  );
};

export default DailyDelevery;
