import React from "react";
import { Link } from "@remix-run/react";

import filemissingIcon from "img/file_missing.png";

export default function ApplyIncomeRoute() {
  const [valueFirst, setValueFirst] = React.useState("None");
  const [valueSecond, setValueSecond] = React.useState("None");
  const options = [
    { label: "None", value_id: "None" },
    { label: "Payslip", value_id: "Payslip" },
    { label: "Tax Receipt", value_id: "Tax" },
  ];
  const handleChange = (event) => {
    setValueFirst(event.target.valueFirst);
    setValueSecond(event.target.valueSecond);
  };
  const Dropdown = ({ value, options, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="mb-2 mt-0.5 w-3/5 rounded border-2 border-gray-500 px-2 py-1.5 hover:cursor-pointer"
      >
        {options.map((options) => (
          <option value={options.value}>{options.label}</option>
        ))}
      </select>
    );
  };

  return (
    <div className="flex">
      <div className="my-20 flex h-fit w-full flex-col gap-y-4 px-12 py-4 align-middle">
        <h1 className="text-2xl font-bold">Upload Income Statement</h1>
        <div className="flex flex-row">
          <img src={filemissingIcon} className="m-4 h-28 w-28" />
          <p className="my-auto align-middle text-lg font-medium">
            Upload your bank statement and/or other relevant documents before
            proceeding.
          </p>
        </div>
        <h2 className="text-2xl font-semibold">
          Bank Statement is required. Other documentations are optional.
        </h2>
        <div className="flex gap-x-4">
          <p className="mb-2 mt-0.5 w-3/5 px-2 py-2">Bank Statement</p>
          <button
            type="button"
            className="my-1.5 w-1/5 rounded border-2 border-black bg-gray-200 px-2 text-sm hover:border-gray-500 hover:bg-gray-100"
          >
            Upload image...
          </button>
          <p className="align-center m-auto w-1/3">No files uploaded...</p>
        </div>
        <div className="flex gap-x-4">
          <Dropdown
            options={options}
            value={valueFirst}
            onChange={handleChange}
          />
          <button
            type="button"
            className="my-1.5 w-1/5 rounded border-2 border-black bg-gray-200 px-2 text-sm hover:border-gray-500 hover:bg-gray-100"
          >
            Upload image...
          </button>
          <p className="align-center m-auto w-1/3">No files uploaded...</p>
        </div>
        <div className="flex gap-x-4">
          <Dropdown
            options={options}
            value={valueSecond}
            onChange={handleChange}
          />
          <button
            type="button"
            className="my-1.5 w-1/5 rounded border-2 border-black bg-gray-200 px-2 text-sm hover:border-gray-500 hover:bg-gray-100"
          >
            Upload image...
          </button>
          <p className="align-center m-auto h-full w-1/3">
            No files uploaded...
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
        <Link
          to="/ifin/apply/identity_proof"
          className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left hover:cursor-pointer hover:border-t-4 hover:border-lime-600"
        >
          <p className="text-lg">Previous</p>
        </Link>
        <Link
          to="/ifin/apply/review"
          className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600"
        >
          <p className="text-lg">Next</p>
        </Link>
      </div>
    </div>
  );
}
