import { Outlet } from "@remix-run/react";
import { AiOutlineDashboard } from "react-icons/ai";

export const meta = () => {
  return [{ title: "Dashboard" }];
};

export default function ifinbidDashboardRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div className="h-14">
        <AiOutlineDashboard className="inline-block text-3xl" />
        <span className="ml-4 align-middle font-poppins text-3xl font-bold">
          Dashboard
        </span>
      </div>
      <Outlet />
    </div>
  );
}
