import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { GrDocumentText } from "react-icons/gr";

import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Application" }];
};

export default function ifinbidApplicationRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div className="h-14">
        <GrDocumentText className="inline-block text-3xl" />
        <span className="ml-4 align-middle font-poppins text-3xl font-bold">
          Financing Applications
        </span>
      </div>
      <div className="h-auto">
        <Outlet />
      </div>
    </div>
  );
}
