import { Link } from "@remix-run/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { ProgressBar } from "../components/ProgressBar";
import { BsMegaphone, BsTags, BsXCircle } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";

export const meta = () => {
  return [{ title: "Dashboard" }];
};

export default function ifinbidDashboardRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div>
        <AiOutlineDashboard className="inline-block text-3xl" />
        <span className="font-poppins ml-4 align-middle text-3xl font-bold">
          Dashboard
        </span>
      </div>
      <div className="flex flex-row gap-x-6">
        <div className="w-3/5 flex-col gap-x-4">
          <div className="font-poppins m-auto ml-0 flex h-1/5 flex-row">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <div className="">
                <span className="mr-4 align-middle text-xl font-bold">
                  Bank Offers
                </span>
                <BsMegaphone className="inline-block text-2xl" />
              </div>
              <p className="font-roboto py-2 text-6xl font-semibold">0</p>
              <p className="py-2 align-middle font-normal">
                Last Month: <span className="font-semibold">0</span>
              </p>
            </div>
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <div className="">
                <span className="mr-4 align-middle text-xl font-bold">
                  Approved Offers
                </span>
                <BsTags className="inline-block text-2xl" />
              </div>
              <p className="font-roboto py-2 text-6xl font-semibold">0</p>
              <p className="py-2 font-normal">
                Last Month: <span className="font-semibold">0</span>
              </p>
            </div>
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <div className="">
                <span className="mr-4 align-middle text-xl font-bold">
                  Closed Offers
                </span>
                <BsXCircle className="inline-block text-xl" />
              </div>
              <p className="font-roboto py-2 text-6xl font-semibold">0</p>
              <p className=" py-2 font-normal">
                Last Month: <span className="font-semibold">0</span>
              </p>
            </div>
          </div>
          <div className="font-poppins m-auto ml-0 flex h-3/5 flex-col">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 shadow-md drop-shadow-md">
              <div className="">
                <span className="mr-4 align-middle text-xl font-bold">
                  Financing Summary
                </span>
              </div>
              <div className="mt-6 flex flex-row">
                <div className="mx-4">
                  0%
                  <ProgressBar />
                  Home
                </div>
                <div className="mx-4">
                  0%
                  <ProgressBar />
                  Personal
                </div>
                <div className="flex flex-col">
                  <div>Pie Graph</div>
                </div>
              </div>
              {/*<div className="mr-10 p-10">
                <Bar data={data} option={options}></Bar>
                </div>*/}
            </div>
          </div>
          <div className="font-poppins m-auto ml-0 flex h-1/5 flex-col">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 shadow-md drop-shadow-md">
              <div className="">
                <span className="mr-4 align-middle text-xl font-bold">
                  Payment Tracker (Monthly)
                </span>
              </div>
              <div>Home Financing</div>
              <div>Personal Financing</div>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex-col">
          <div className="font-poppins m-auto mr-0 flex h-2/5 flex-row pb-2 pt-4 ">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <span className="mr-4 align-middle text-xl font-bold">
                Credit Score
              </span>
            </div>
          </div>
          <div className="font-poppins m-auto mr-0 flex h-3/5 flex-row pb-2 pt-4">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <span className="mr-4 align-middle text-xl font-bold">
                Transaction History
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
