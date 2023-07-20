import { Link } from "@remix-run/react";
import { BiBriefcase } from "react-icons/bi";
import { BsCreditCard, BsCoin, BsGraphUpArrow } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";

export default function ReasonRoute() {
  return (
    <div className="flex flex-col gap-y-8 pb-4 pt-4 font-poppins">
      <div className="h-232 w-full rounded-2xl border-2 border-gray-400 bg-white shadow-md drop-shadow-md">
        <div className="flex h-1/2 flex-col gap-y-4 px-8 py-40 text-center align-middle">
          <h1 className="text-4xl font-bold">
            You are about to terminate this contract
          </h1>
          <h2 className="text-2xl">
            Please provide the reason of this termination before proceeding.
          </h2>
          <h2 className="text-2xl">
            Your request will be reviewed before finalizing the termination.
          </h2>
        </div>
        <div className="flex flex-row gap-x-4 pt-20">
          <div className="flex w-1/3 flex-row">
            <div className="ml-16 flex gap-x-2 text-lg">
              <div>
                <BsCoin className="h-20 w-20" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-500">
                  Nett Amount
                </h3>
                <p className="font-robotocondensed text-5xl font-bold">
                  RM90,000.00
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 flex-row">
            <div className="ml-16 flex gap-x-2 text-lg">
              <div>
                <BsCreditCard className="h-20 w-20" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-500">
                  Monthly Installment
                </h3>
                <p className="font-robotocondensed text-5xl font-bold">RM700</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 flex-row">
            <div className="ml-16 flex gap-x-2 text-lg">
              <div>
                <CiPercent className="h-20 w-20" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-500">
                  Interest Rate
                </h3>
                <p className="font-robotocondensed text-5xl font-bold">5 %</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
