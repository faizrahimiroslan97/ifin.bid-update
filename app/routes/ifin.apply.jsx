import { Link, Outlet } from "@remix-run/react";
import { FaRegCreditCard } from "react-icons/fa";

export default function ifinbidApplyRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div className="h-14">
        <FaRegCreditCard className="inline-block text-3xl" />
        <span className="ml-4 align-middle font-poppins text-3xl font-bold">
          Apply for Financing
        </span>
      </div>
      <div className="h-auto">
        <Outlet />
      </div>
    </div>
  );
}
