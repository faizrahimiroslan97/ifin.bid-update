import React, { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { FaRegUser } from "react-icons/fa";

export default function ifinbidProfileIndexRoute() {
  const [value_id, setValueId] = React.useState("None");
  const [value_statement, setValueStatement] = React.useState("None");
  const options_id = [
    { label: "None", value_id: "None" },
    { label: "Birth Certificate", value_id: "Birth Certificate" },
    { label: "Passport", value_id: "Passport" },
    {
      label: "Certificate of Citizenship",
      value_id: "Certificate of Citizenship",
    },
    { label: "Driver's License", value_id: "Driver's License" },
  ];
  const options_statement = [
    { label: "None", value_id: "None" },
    { label: "Payslip", value_id: "Payslip" },
    { label: "Tax Receipt", value_id: "Tax Receipt" },
  ];
  const handleChangeId = (event) => {
    setValueId(event.target.value_id);
  };
  const handleChangeStatement = (event) => {
    setValueStatement(event.target.value_statement);
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
    <div className="flex flex-col pt-20">
      <div className="mt-2 flex w-full flex-col gap-y-4 px-12 py-2 align-middle">
        <h1 className="text-2xl font-bold">Personal Identification</h1>
        <p className="font-medium">
          These documents will be used to verify your identity when applying for
          any financing services.
        </p>
        <div className="flex gap-x-4">
          <p className="mb-2 mt-0.5 w-3/5 px-2 py-2">Identity Card (MyKad)</p>
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
            options={options_id}
            value={value_id}
            onChange={handleChangeId}
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
            options={options_id}
            value={value_id}
            onChange={handleChangeId}
          />
          <button
            type="button"
            className="my-1.5 w-1/5 rounded border-2 border-black bg-gray-200 px-2 text-sm hover:border-gray-500 hover:bg-gray-100"
          >
            Upload image...
          </button>
          <p className="align-center m-auto w-1/3">No files uploaded...</p>
        </div>
      </div>
      <div className="mb-2 flex w-full flex-col gap-y-4 px-12 py-2 align-middle">
        <h1 className="text-2xl font-bold">Income Statements</h1>
        <div className="font-medium">
          <p>
            These documents will be used to verify your eligibility for applying
            financing services.
          </p>
        </div>
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
            options={options_statement}
            value={value_statement}
            onChange={handleChangeStatement}
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
            options={options_statement}
            value={value_statement}
            onChange={handleChangeStatement}
          />
          <button
            type="button"
            className="my-1.5 w-1/5 rounded border-2 border-black bg-gray-200 px-2 text-sm hover:border-gray-500 hover:bg-gray-100"
          >
            Upload image...
          </button>
          <p className="align-center m-auto w-1/3">No files uploaded...</p>
        </div>
      </div>
    </div>
  );
}
