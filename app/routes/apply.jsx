import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaRegCreditCard,
  FaHandHoldingUsd,
  FaCarSide,
  FaRegBuilding,
} from "react-icons/fa";
import { TbHomeDollar } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";
import { BiHelpCircle } from "react-icons/bi";
import { BsMegaphone} from "react-icons/bs";
import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Dashboard" }];
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardPage() {
    return(
        <main>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </head>
  
        <body className='${open ? "ml-0" : "ml-60"} ml-72 flex bg-white p-6'>
          <div className="mx-10 my-6 w-full">
            <div>
            <FaRegCreditCard className="inline-block text-3xl" />
              <span className="ml-4 align-middle font-poppins text-3xl font-bold">
                Apply of Fianacing
              </span>
            </div>
            <div className="flex-row">
              <div className="w-3/5 flex-col p-0">
                <div className="m-auto ml-0 flex flex-row pb-2 pt-4 font-poppins">
                  <div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                    <div className="">
                      <span className="mr-4 align-middle text-xl font-bold ">
                        1.Financing Options
                      </span>
                      <span className="mr-4 align-middle text-xl font-bold">
                        2.Identify Verification
                      </span>
                      <span className="mr-4 align-middle text-xl font-bold">
                        3.Income Verification
                      </span>
                      <span className="mr-4 align-middle text-xl font-bold">
                        4.Review Data
                      </span>
                      <div>Choose Financing Service Specifications</div>
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                      <FaHandHoldingUsd className="inline-block text-3xl" />
                        Personal Financing
                      </div>
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                      <TbHomeDollar className="inline-block text-3xl" />
                        Home Financing
                      </div>
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                      <FaCarSide className="inline-block text-3xl" />
                        Car Financing
                      </div>
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                      <FaRegBuilding className="inline-block text-3xl" />
                        Business Financing
                      </div>
                      <div><h1>
                          Total Amount
                          <div> <input type="range" min="0" max="10000000" class="slider" id="myRange"></input></div>
                          <p>Value: <span id="TA"></span></p>
                          </h1>
                        <h1>
                          Preferred Financing Tenure
                          <div> <input className="slide:bg-lime-600" type="range" min="0" max="10000000" class="slider" id="myRange"></input></div>
                          <p>Value: <span id="PFT"></span></p>
                        </h1>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </main>
    )
}
