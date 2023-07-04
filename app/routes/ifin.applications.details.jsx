import React, { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import maybankiIcon from "img/maybank_i.jpg";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineStop, AiOutlineInfoCircle } from "react-icons/ai";
import {
  BsClockHistory,
  BsCreditCard,
  BsCoin,
  BsCalendar3,
  BsGraphUpArrow,
} from "react-icons/bs";
import { CiBag1, CiPercent } from "react-icons/ci";

import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Application" }];
};

export default function ifinbidApplicationIndexRoute() {
  const accordionData = {
    title: "Section 1",
    bank: "MAYBANK",
    amount: "RM781",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const { title, bank, amount, content } = accordionData;

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="pb-4 pt-4 font-poppins">
      <div className="h-232 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md">
        <div className="flex flex-col">
          <div className="fixed flex h-40 w-full flex-row justify-between border-b-2 border-gray-600">
            <div className="w-1/2">
              <img
                src={maybankiIcon}
                className="mx-auto h-32 w-60 align-middle"
              />
            </div>
            <div className="w-1/2 text-center">
              <h1 className="text-gray-500">Total Amount</h1>
              <p className="font-robotocondensed text-6xl font-bold">
                RM100,000.00
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-row pt-40">
            <div className="ml-4 mr-8 w-1/2 text-lg">
              <h1 className="text-gray-500">Amount Paid</h1>
              <p className="font-robotocondensed text-6xl font-bold">
                RM100,000.00
              </p>
            </div>
            <div className="ml-8 mr-4 w-1/2 text-lg">
              <h1 className="text-gray-500">Balance Amount</h1>
              <p className="font-robotocondensed text-6xl font-bold">
                RM100,000.00
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-row">
            <div className="w-1/3 text-lg">
              <GrDocumentText />
              <h1 className="text-gray-500">Reference ID</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
            <div className="w-1/3 text-lg">
              <AiOutlineStop />
              <h1 className="text-gray-500">Tenure Expiry Date</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
            <div className="w-1/3 text-lg">
              <BsClockHistory />
              <h1 className="text-gray-500">Payment Date</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-row">
            <div className="w-1/3 text-lg">
              <BsCreditCard />
              <h1 className="text-gray-500">Monthly Installment</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
            <div className="w-1/3 text-lg">
              <CiBag1 />
              <h1 className="text-gray-500">Total Profit Payable</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
            <div className="w-1/3 text-lg">
              <BsCoin />
              <h1 className="text-gray-500">Nett Amount</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-row">
            <div className="w-1/3 text-lg">
              <BsCalendar3 />
              <h1 className="text-gray-500">Financing Tenure</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
            <div className="w-1/3 text-lg">
              <CiPercent />
              <h1 className="text-gray-500">Interest Rate</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
            <div className="w-1/3 text-lg">
              <BsGraphUpArrow />
              <h1 className="text-gray-500">Interest Rate Type</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                RM100,000.00
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-row">
            <div className="ml-4 mr-4 w-1/2 text-lg">
              <h1 className="text-gray-500">Loan Type</h1>
              <p className="font-robotocondensed text-4xl font-bold">
                Home Financing
              </p>
            </div>
            <div className="ml-4 mr-4 w-1/2 text-lg">
              <AiOutlineInfoCircle />
              <h1 className="text-gray-500">Status</h1>
              <p className="font-robotocondensed text-4xl font-bold">Ongoing</p>
            </div>
          </div>
          <div className="fixed bottom-0 w-full justify-between border-t-2 border-gray-600 text-center">
            <button className="w-full border-t-4 border-transparent px-4 py-4 hover:cursor-pointer hover:border-t-4 hover:border-lime-600">
              <p className="text-lg">Terminate Contract</p>
            </button>
          </div>
        </div>
      </div>
      <h1 className="py-4 text-2xl font-bold">Transaction Activity</h1>
      <div className="h-184 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md">
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
        <div className="fixed bottom-0 w-full justify-between border-t-2 border-gray-600 text-center">
          <button className="w-full border-t-4 border-transparent px-4 py-4 hover:cursor-pointer hover:border-t-4 hover:border-lime-600">
            <p className="text-lg">1/1</p>
          </button>
        </div>
      </div>
    </div>
  );
}
