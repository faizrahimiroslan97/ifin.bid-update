import React, { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ProgressBar from "../components/ProgressBarVertical";
import maybankiIcon from "img/maybank_i.jpg";
import { AiOutlineStop, AiOutlineInfoCircle } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import {
  BsClockHistory,
  BsCreditCard,
  BsCoin,
  BsCalendar3,
  BsGraphUpArrow,
} from "react-icons/bs";
import { CiBag1, CiPercent } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";

import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Application" }];
};

export default function ifinbidApplicationIndexRoute() {
  const accordionData = {
    title: "Deposit from Bank Account",
    bank: "MAYBANK",
    amount: "RM781",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.",
  };

  const { title, bank, amount, content } = accordionData;

  const [progress, setProgress] = React.useState(0);

  const testData = [{ bgcolor: "green", completed: 46 }];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="pb-4 pt-4 font-poppins">
      <div className="h-232 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md">
        <div className="flex flex-col gap-y-4 px-8">
          <div className="flex h-40 w-full flex-row justify-between border-b-2 border-gray-600">
            <div className="m-auto w-1/2">
              <img src={maybankiIcon} className="mx-auto h-32 w-60" />
            </div>
            <div className="m-auto w-1/2">
              <h1 className="font-semibold text-gray-500">Total Amount</h1>
              <p className="font-robotocondensed text-5xl font-bold">
                RM100,000.00
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-row gap-x-8">
            <div className="w-1/2 text-lg">
              <h1 className="font-semibold text-gray-500">Amount Paid</h1>
              <p className="font-robotocondensed text-5xl font-bold">
                RM46,000.00
              </p>
            </div>
            <div className="w-1/2 text-right text-lg">
              <h1 className="font-semibold text-gray-500">Balance Amount</h1>
              <p className="font-robotocondensed text-5xl font-bold">
                RM54,000.00
              </p>
            </div>
          </div>
          <div>
            {testData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
          <div className="mt-6 flex flex-row gap-x-4">
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <GrDocumentText className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">Reference ID</h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  HF00013213
                </p>
              </div>
            </div>
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <AiOutlineStop className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">
                  Tenure Expiry Date
                </h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  07 July 2028
                </p>
              </div>
            </div>
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <BsClockHistory className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">Payment Date</h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  21st of every month
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-row gap-x-4">
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <BsCreditCard className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">
                  Monthly Installment
                </h1>
                <p className="font-robotocondensed text-3xl font-bold">RM700</p>
              </div>
            </div>
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <CiBag1 className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">
                  Total Profit Payable
                </h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  RM10,000.00
                </p>
              </div>
            </div>
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <BsCoin className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">Nett Amount</h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  RM90,000.00
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-row gap-x-4">
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <BsCalendar3 className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">
                  Financing Tenure
                </h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  5 years
                </p>
              </div>
            </div>
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <CiPercent className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">Interest Rate</h1>
                <p className="font-robotocondensed text-3xl font-bold">5%</p>
              </div>
            </div>
            <div className="flex w-1/3 flex-row gap-x-2 text-lg">
              <BsGraphUpArrow className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">
                  Interest Rate Type
                </h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  Flat Rate
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-row gap-x-4">
            <div className="ml-auto mr-auto flex w-1/2 flex-row gap-x-2 text-lg">
              <BiBriefcase className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">Loan Type</h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  Home Financing
                </p>
              </div>
            </div>
            <div className="flex w-1/2 flex-row gap-x-2 text-lg">
              <AiOutlineInfoCircle className="h-16 w-16" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-500">Status</h1>
                <p className="font-robotocondensed text-3xl font-bold">
                  Ongoing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full justify-between border-t-2 border-gray-600 text-center">
          <button className="w-full rounded-b-2xl border-t-4 border-transparent px-4 py-4 text-lg text-red-600 hover:cursor-pointer hover:bg-red-800 hover:text-xl hover:text-white">
            <p>Terminate Contract</p>
          </button>
        </div>
      </div>
      <div className="h-184 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md">
        <div className="flex flex-col gap-y-4 px-8">
          <h1 className="pt-4 text-2xl font-bold">Transaction Activity</h1>
          <h1 className="font-semibold text-gray-500">March 2023</h1>
          <div className="accordion">
            <div className="accordion-item">
              <div
                className={
                  isActive
                    ? "accordion-title rounded-t-md border-2 border-b-0 border-black"
                    : "accordion-title rounded-md border-2 border-black"
                }
                onClick={() => setIsActive(!isActive)}
              >
                <div>{title}</div>
                <div>{bank}</div>
                <div>{amount}</div>
                <div>{isActive ? "-" : "+"}</div>
              </div>
              {isActive && (
                <div className="accordion-content rounded-b-md border-2 border-t-0 border-black">
                  {content}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full justify-between border-t-2 border-gray-600 px-4 py-4 text-center">
          <p className="text-lg">1/1</p>
        </div>
      </div>
    </div>
  );
}
