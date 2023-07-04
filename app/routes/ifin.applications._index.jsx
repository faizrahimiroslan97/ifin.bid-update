import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";

import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Application" }];
};

export default function ifinbidApplicationIndexRoute() {
  return (
    <div className="pb-4 pt-4 font-poppins">
      <div className="h-184 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md">
        <div className="flex flex-col">
          <div className="fixed inline-flex w-full flex-row justify-between border-b-2 border-gray-600">
            <div className="mx-2 w-full border-b-4 border-transparent px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
              <p className="text-xl">Bank</p>
            </div>
            <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
              <p className="text-xl">Financing Type</p>
            </div>
            <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
              <p className="text-xl">Total Amount</p>
            </div>
            <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
              <p className="text-xl">Interest Rate</p>
            </div>
            <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
              <p className="text-xl">Finance Tenure</p>
            </div>
            <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
              <p className="text-xl">Due Date</p>
            </div>
            <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
              <p className="text-xl">Status</p>
            </div>
          </div>
          <div className="w-full pt-16">
            <div className="inline-flex w-full flex-row justify-between">
              <Link
                to="/ifin/applications/details"
                className="mx-2 w-full border-b-4 border-transparent px-4 py-4"
              >
                <p className="text-xl">Maybank</p>
              </Link>
              <div className="mx-2 w-full px-4 py-4">
                <p className="text-xl">Personal Financing</p>
              </div>
              <div className="mx-2 w-full px-4 py-4">
                <p className="text-xl">12500</p>
              </div>
              <div className="mx-2 w-full px-4 py-4">
                <p className="text-xl">3.88</p>
              </div>
              <div className="mx-2 w-full px-4 py-4">
                <p className="text-xl">60 Months</p>
              </div>
              <div className="mx-2 w-full px-4 py-4">
                <p className="text-xl">4/7/2028</p>
              </div>
              <div className="mx-2 w-full px-4 py-4">
                <p className="text-xl">Ongoing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
