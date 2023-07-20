import { Link, Outlet } from "@remix-run/react";
import { FaRegCreditCard } from "react-icons/fa";

export default function ApplyRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div className="h-14">
        <FaRegCreditCard className="inline-block text-3xl" />
        <span className="ml-4 align-middle font-poppins text-3xl font-bold">
          Apply for Financing
        </span>
      </div>
      <div className="h-auto">
        <div className="pb-4 pt-4 font-poppins">
          <div className="h-184 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md">
            <div className="fixed inline-flex w-full flex-row justify-between rounded-t-2xl border-b-2 border-gray-600 bg-gray-200 text-center">
              <Link
                to="/ifin/apply"
                className="mx-2 w-full border-b-4 border-transparent px-4 py-4 text-base text-lime-950 hover:cursor-pointer hover:border-lime-600"
              >
                <p className="text-xl">1. Financing Options</p>
              </Link>
              <Link
                to="/ifin/apply/identity"
                className="mx-2 w-full border-b-4 border-transparent px-4 py-4 text-base text-lime-950 hover:cursor-pointer hover:border-lime-600"
              >
                <p className="text-xl">2. Identity Verification</p>
              </Link>
              <Link
                to="/ifin/apply/income"
                className="mx-2 w-full border-b-4 border-transparent px-4 py-4 text-base text-lime-950 hover:cursor-pointer hover:border-lime-600"
              >
                <p className="text-xl">3. Income Verification</p>
              </Link>
              <Link
                to="/ifin/apply/review"
                className="mx-2 w-full border-b-4 border-transparent px-4 py-4 text-base text-lime-950 hover:cursor-pointer hover:border-lime-600"
              >
                <p className="text-xl">4. Review Data</p>
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
