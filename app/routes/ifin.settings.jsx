import { useState } from "react";
import { Outlet } from "@remix-run/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { FiSettings } from "react-icons/fi";
import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Settings" }];
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function SettingPage() {
  return (
    <main>
      <body className='${open ? "ml-0" : "ml-60"} ml-72 flex bg-white p-6'>
        <div className="mx-10 my-6 w-full">
          <div className="h-14">
            <FiSettings className="inline-block text-3xl" />
            <span className="ml-4 align-middle font-poppins text-3xl font-bold">
              Settings
            </span>
          </div>
          <div className="h-auto">
            <div className="pb-4 pt-4 font-poppins">
              <div className="h-184 w-full rounded-2xl bg-white shadow-md drop-shadow-md">
                <div className="fixed inline-flex flex-row justify-between border-b-2 border-gray-600 text-center">
                  <div className="mx-2 w-full border-b-4 border-lime-800 px-4 py-4 hover:cursor-pointer">
                    <p className="text-xl font-bold">Profile</p>
                  </div>
                  <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                    <p className="text-xl">Security</p>
                  </div>
                  <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                    <p className="text-xl">Notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </main>
  );
}

<div className="">
  <span className="mr-4 align-middle text-xl font-bold">Profile</span>
  <span className="mr-4 align-middle text-xl font-bold">Security</span>
  <span className="mr-4 align-middle text-xl font-bold">Notifications</span>
  <div>
    <h1>Change Email</h1>
    <p>E-Mail</p>
  </div>
  <div>
    <h1>Change Mobile Number</h1>
    <p>Mobile Phone No.</p>
  </div>
</div>;
