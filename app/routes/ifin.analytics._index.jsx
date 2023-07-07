import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { FaChartBar } from "react-icons/fa";
import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Analytics" }];
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AnalyticsRoute() {
  return (
    <div className="pb-4 pt-4 font-poppins">
      <div className="h-184 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md"></div>
    </div>
  );
}
