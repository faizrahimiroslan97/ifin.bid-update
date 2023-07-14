import { AiOutlineDashboard } from "react-icons/ai";
import { BsMegaphone, BsTags, BsXCircle } from "react-icons/bs";
import { ProgressBar } from "../components/ProgressBar";

export default function testRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div className="h-14">
        <AiOutlineDashboard className="inline-block text-3xl" />
        <span className="ml-4 align-middle font-poppins text-3xl font-bold">
          Dashboard
        </span>
      </div>
      <div className="flex">
        <div className="flex min-w-full flex-col">
          <div className="flex h-full max-h-40">
            <div className="flex-1 rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <span className="mr-4 align-middle text-xl font-bold">
                Incoming Offers
              </span>
              <BsMegaphone className="inline-block text-2xl" />
              <p className="py-2 font-roboto text-6xl font-semibold">0</p>
              <p className="py-2 align-middle font-normal">
                Last Month: <span className="font-semibold">0</span>
              </p>
            </div>
            <div className="flex-1 rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <h1>Approved Offers</h1>
            </div>
            <div className="flex-1 rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <h1>Closed Offers</h1>
            </div>
          </div>
          <div className="flex h-full">
            <div className="flex w-full rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <h1>Financing Summary</h1>
              <div className="mt-6 flex flex-row">
                <div className="mx-4">
                  0%
                  <ProgressBar />
                  Home
                </div>
                <div className="mx-4">
                  0%
                  <ProgressBar />
                  Personal
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full">
            <div className="flex w-full rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
              <h1>Payment Tracker (Monthly)</h1>
              <div>
                <p>Home Financing</p>
                <p>RM0000.00</p>
                <p>March</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
