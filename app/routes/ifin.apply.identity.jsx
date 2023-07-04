import React from "react";
import { Link } from "@remix-run/react";

export default function ifinbidApplyIdentityRoute() {
  const [value, setValue] = React.useState("Johor");
  const options = [
    { label: "Johor", value: "Johor" },
    { label: "Kedah", value: "Kedah" },
    { label: "Kelantan", value: "Kelantan" },
    { label: "Malacca", value: "Malacca" },
    { label: "Negeri Sembilan", value: "Negeri Sembilan" },
    { label: "Pahang", value: "Pahang" },
    { label: "Penang", value: "Penang" },
    { label: "Perak", value: "Perak" },
    { label: "Perlis", value: "Perlis" },
    { label: "Sabah", value: "Sabah" },
    { label: "Sarawak", value: "Sarawak" },
    { label: "Selangor", value: "Selangor" },
    { label: "Terengganu", value: "Terengganu" },
    { label: "WP Kuala Lumpur", value: "WP Kuala Lumpur" },
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const Dropdown = ({ value, options, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="mt-0.5 w-full rounded border-2 border-gray-500 px-2 py-1.5 hover:cursor-pointer"
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  };

  return (
    <div className="flex">
      <div className="my-20 flex h-fit w-full flex-col gap-y-2 px-12 py-4 align-middle">
        <h1 className="text-2xl font-bold">Update Personal Details</h1>
        <div className="flex gap-x-12">
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">First Name</h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">Last Name</h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">
              Mobile Phone No.
            </h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
        </div>
        <div className="flex gap-x-12">
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">E-Mail</h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">NRIC</h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">Date of Birth</h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-medium text-gray-500">Address Line 1</h2>
          <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-medium text-gray-500">Address Line 2</h2>
          <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
        </div>
        <div className="flex gap-x-12">
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">City</h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">State</h2>
            <Dropdown options={options} value={value} onChange={handleChange} />
          </div>
          <div className="w-1/3 text-lg">
            <h2 className="text-lg font-medium text-gray-500">Postal Code</h2>
            <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 text-base focus:border-blue-500 focus:outline-none" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
        <Link
          to="/ifin/apply/"
          className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left hover:cursor-pointer hover:border-t-4 hover:border-lime-600"
        >
          <p className="text-lg">Previous</p>
        </Link>
        <Link
          to="/ifin/apply/identity_proof"
          className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600"
        >
          <p className="text-lg">Next</p>
        </Link>
      </div>
    </div>
  );
}
