import React from "react";
import { DailyDeleveryDataTable } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/daily-delevery-data-table";
import { tasks } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/data/tasks";
import { columns } from "@/app/(resticted-layout)/components/online-delevery/daily-delevery-table/columns";

const DailyDelevery = () => {
  return (
    <div className="mx-3">
      <div className="grid lg:grid-cols-4 justify-center grid-cols-2 gap-4">
        <div className="lg:w-72 w-64 h-32 rounded-xl bg-slate-100 border pb-6 my-2">
          <div className="m-4">
            <h1 className=" text-lg ">Order</h1>
            <h1 className="text-4xl font-bold mt-2">+6302</h1>
          </div>
        </div>
        <div className="lg:w-72 w-64 h-32 rounded-xl bg-slate-100 border pb-6 my-2">
          <div className="m-4">
            <h1 className=" text-lg ">Dispatched Order</h1>
            <h1 className="text-4xl font-bold mt-2">+8302</h1>
          </div>
        </div>
        <div className="lg:w-72 w-64 h-32 rounded-xl bg-slate-100 border pb-6  lg:my-2">
          <div className="m-4">
            <h1 className=" text-lg ">Delivered Order</h1>
            <h1 className="text-4xl font-bold mt-2">+320</h1>
          </div>
        </div>
      </div>
      <DailyDeleveryDataTable columns={columns} data={tasks} />
    </div>
  );
};

export default DailyDelevery;
