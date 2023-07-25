import React from "react";
import { Link } from "@remix-run/react";
import { BiBriefcase } from "react-icons/bi";
import { BsCreditCard, BsCoin, BsGraphUpArrow } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";

export default function ApplicationTerminateRoute() {
  const [value, setValue] = React.useState("I no longer require the service");
  const options = [
    {
      label: "I no longer require the service",
      value: "I no longer require the service",
    },
    {
      label: "I have accepted another offer",
      value: "I have accepted another offer",
    },
    { label: "Other", value: "Other" },
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const Dropdown = ({ value, options, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="mb-2 mt-0.5 rounded border-2 border-gray-500 px-4 py-1.5 hover:cursor-pointer"
      >
        {options.map((options) => (
          <option value={options.value}>{options.label}</option>
        ))}
      </select>
    );
  };
  return (
    <div className="flex flex-col gap-y-8 pb-4 pt-4 font-poppins">
      <div className="h-232 w-full rounded-2xl border-2 border-gray-400 bg-white pb-16 shadow-md drop-shadow-md">
        <div className="flex flex-col gap-y-4 px-8 pt-20 text-center align-middle">
          <div className="flex flex-col gap-x-4 gap-y-2 px-20 pt-6">
            <h1 className="text-4xl font-bold">
              Are you sure you want to terminate the contract?
            </h1>
            <h2 className="text-2xl">
              You will be missing out on this exclusive deal catered to you.
            </h2>
            <h2 className="text-2xl">
              This contract will be nullified and will not reappear again once
              you proceed.
            </h2>
          </div>
          <div className="flex flex-row gap-x-4 px-20 text-left">
            <div className="flex w-1/3 flex-row">
              <div className="mx-auto flex gap-x-2 text-lg">
                <div>
                  <BsCoin className="h-16 w-16" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-500">
                    Nett Amount
                  </h3>
                  <p className="font-robotocondensed text-4xl font-bold">
                    RM90,000.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-row">
              <div className="mx-auto flex gap-x-2 text-lg">
                <div>
                  <BsCreditCard className="h-16 w-16" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-500">
                    Monthly Installment
                  </h3>
                  <p className="font-robotocondensed text-4xl font-bold">
                    RM700
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-row">
              <div className="mx-auto flex gap-x-2 text-lg">
                <div>
                  <CiPercent className="h-16 w-16" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-500">
                    Interest Rate
                  </h3>
                  <p className="font-robotocondensed text-4xl font-bold">5 %</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 px-20 text-left">
            <div className="flex w-1/2 flex-row">
              <div className="mx-auto flex gap-x-2 text-lg">
                <div>
                  <BiBriefcase className="h-16 w-16" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold text-gray-500">
                    Interest Rate Type
                  </h1>
                  <p className="font-robotocondensed text-4xl font-bold">
                    Flat Rate
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 flex-row">
              <div className="mx-auto flex gap-x-2 text-lg">
                <div>
                  <BsGraphUpArrow className="h-16 w-16" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold text-gray-500">
                    Financing Tenure
                  </h1>
                  <p className="font-robotocondensed text-4xl font-bold">
                    15 Years
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-4 gap-y-2 px-20 pt-6">
            <h2 className="text-2xl">
              Please provide the reason of this termination before proceeding.
            </h2>
            <h2 className="text-2xl">
              Your request will be reviewed before finalizing the termination.
            </h2>
            <div className="flex">
              <div className="mx-auto">
                <Dropdown
                  options={options}
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 px-40 text-center align-middle">
              <textarea className="mb-2 mt-0.5 h-28 w-full resize-none rounded border-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></textarea>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
          <Link
            to="/ifin/applications/"
            className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left hover:cursor-pointer hover:border-t-4 hover:border-lime-600"
          >
            <p className="text-lg">Decline</p>
          </Link>
          <Link
            to="/ifin/applications/redirect"
            className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600 hover:font-semibold"
          >
            <p className="text-lg">Accept</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
