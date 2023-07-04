import React from "react";
import { Link } from "@remix-run/react";

export default function ifinbidApplyReviewRoute() {
  return (
    <div className="flex">
      <div className="my-20 flex w-full flex-col gap-y-4 px-12 py-4 align-middle">
        <h1 className="text-2xl font-bold">Review Provided Details</h1>
        <div className="flex">
          <div className="w-2/3">
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-lg font-medium text-gray-500">
                  First Name
                </h2>
                <p className="text-2xl">#firstname</p>
              </div>
              <div className="w-1/2">
                <h2 className="text-lg font-medium text-gray-500">Last Name</h2>
                <p className="text-2xl">#lastname</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-lg font-medium text-gray-500">Email</h2>
                <p className="text-2xl">#email</p>
              </div>
              <div className="w-1/2">
                <h2 className="text-lg font-medium text-gray-500">
                  Mobile Phone No.
                </h2>
                <p className="text-2xl">#mobile</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-lg font-medium text-gray-500">NRIC</h2>
                <p className="text-2xl">#ic</p>
              </div>
              <div className="w-1/2">
                <h2 className="text-lg font-medium text-gray-500">
                  Date of Birth
                </h2>
                <p className="text-2xl">#dob</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-500">
                Address Line
              </h2>
              <p className="text-2xl">#address</p>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <h2 className="text-lg font-medium text-gray-500">City</h2>
                <p className="text-2xl">#city</p>
              </div>
              <div className="w-1/3">
                <h2 className="text-lg font-medium text-gray-500">State</h2>
                <p className="text-2xl">#state</p>
              </div>
              <div className="w-1/3">
                <h2 className="text-lg font-medium text-gray-500">
                  Postal Code
                </h2>
                <p className="text-2xl">#postal</p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <h2 className="text-lg font-medium text-gray-500">
              Uploaded Documents
            </h2>
            <p className="text-2xl">#documents</p>
            <h2 className="text-lg font-medium text-gray-500">
              Financing Type
            </h2>
            <p className="text-2xl">#fintype</p>
            <h2 className="text-lg font-medium text-gray-500">Total Amount</h2>
            <p className="text-2xl">#amount</p>
            <h2 className="text-lg font-medium text-gray-500">
              Preferred Tenure Length
            </h2>
            <p className="text-2xl">#length</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
        <Link
          to="/ifin/apply/income"
          className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left hover:cursor-pointer hover:border-t-4 hover:border-lime-600"
        >
          <p className="text-lg">Previous</p>
        </Link>
        <Link
          to="/ifin/apply/"
          className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600"
        >
          <p className="text-lg">Submit</p>
        </Link>
      </div>
    </div>
  );
}
