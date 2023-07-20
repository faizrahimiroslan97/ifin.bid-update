import { Link } from "@remix-run/react";
import { BiBriefcase } from "react-icons/bi";
import { BsCreditCard, BsCoin, BsGraphUpArrow } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";

export default function ApplicationTerminateRoute() {
  return (
    <div className="flex flex-col gap-y-8 pb-4 pt-4 font-poppins">
      <div className="h-232 w-full rounded-2xl border-2 border-gray-400 bg-white pb-16 shadow-md drop-shadow-md">
        <div className="flex h-1/2 flex-col gap-y-4 px-8 py-40 text-center align-middle">
          <h1 className="text-4xl font-bold">
            Are you sure you want to terminate the contract?
          </h1>
          <h2 className="text-2xl">
            You will be missing out on this exclusive deal catered to you.
          </h2>
          <h2 className="text-2xl">
            This offer will be deleted and will not reappear again once you
            proceed.
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
        <div className="mt-6 flex flex-row gap-x-4">
          <div className="flex w-1/2 flex-row">
            <div className="ml-36 flex gap-x-2 text-lg">
              <div>
                <BiBriefcase className="h-20 w-20" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold text-gray-500">
                  Interest Rate Type
                </h1>
                <p className="font-robotocondensed text-5xl font-bold">
                  Flat Rate
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-row">
            <div className="ml-36 flex gap-x-2 text-lg">
              <div>
                <BsGraphUpArrow className="h-20 w-20" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold text-gray-500">
                  Financing Tenure
                </h1>
                <p className="font-robotocondensed text-5xl font-bold">
                  15 Years
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
          <div className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left">
            <p className="text-lg"></p>
          </div>
          <Link
            to="/ifin/apply/identity"
            className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600 hover:font-semibold"
          >
            <p className="text-lg">Next</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
