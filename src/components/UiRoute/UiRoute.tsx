"use client";
import Link from "next/link";
import React from "react";

interface Route {
  name: string;
  link: string;
}

const UiRoute = ({
  routes,
  right,
}: {
  routes: Route[];
  right?: React.ReactNode | string;
}) => {
  return (
    <section className="py-2 flex justify-between">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
          {routes?.map((route, index) => (
            <li
              key={index}
              className="inline-flex font-bold items-center hover:text-blue-500"
            >
              <Link
                href={route.link}
                className="text-black hover:text-blue-600"
              >
                {route.name}
              </Link>
              <i className="ml-3 text-gray-400 fa fa-chevron-right"> / </i>
            </li>
          ))}
        </ol>
      </div>
      {right && (React.isValidElement(right) ? right : <div>{right}</div>)}
    </section>
  );
};

export default UiRoute;
