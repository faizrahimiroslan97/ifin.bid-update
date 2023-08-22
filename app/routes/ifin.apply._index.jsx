import { Link } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import SliderAmount from "../components/SliderAmount";
import { useUser } from "~/utils";
import personalfinanceIcon from "img/personal_finance.png";
import homefinanceIcon from "img/home_finance.png";
import carfinanceIcon from "img/car_finance.png";
import businessfinanceIcon from "img/business_finance.png";

export default function ApplyIndexRoute() {
  const user = useUser();
  const amountRef = useRef(null);
  const tenureRef = useRef(null);

  const [amount, setAmount] = useState(user.amount);
  const [tenure, setTenure] = useState(user.tenure);

  const handleChange = (event) => {
    setAmount(event.target.amount);
    setTenure(event.target.tenure);
  };

  return (
    <div className="flex flex-col pt-20">
      <div className="h-fit w-full flex-col px-12 py-4 align-middle">
        <div className="pt-4 text-2xl font-bold">
          <span>Choose Financing Service Specifications</span>
        </div>
        <h2 className="pt-6 text-lg font-medium text-gray-500">
          Financing Type
        </h2>
        <div className="inline-flex w-full flex-row justify-between pt-6 text-center">
          <div
            id="ftype"
            className="mr-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
          >
            <img
              src={personalfinanceIcon}
              className="m-4 ml-auto mr-auto h-28 w-28"
            />
            <p className="text-lg">Personal Financing</p>
          </div>
          <div
            id="ftype"
            className="mx-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
          >
            <img
              src={homefinanceIcon}
              className="m-4 ml-auto mr-auto h-28 w-28"
            />
            <p className="text-lg">Home Financing</p>
          </div>
          <div
            id="ftype"
            className="mx-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
          >
            <img
              src={carfinanceIcon}
              className="m-4 ml-auto mr-auto h-28 w-28"
            />
            <p className="text-lg">Car Financing</p>
          </div>
          <div
            id="ftype"
            className="ml-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
          >
            <img
              src={businessfinanceIcon}
              className="m-4 ml-auto mr-auto h-28 w-28"
            />
            <p className="text-lg">Business Financing</p>
          </div>
        </div>
        <div className="pt-6 text-lg font-medium text-gray-500">
          Total Amount
        </div>
        <div className="mt-4">
          <SliderAmount />
        </div>
        <div className="pt-6 text-lg font-medium text-gray-500">
          Preferred Financing Tenure
        </div>
        <div className="mt-4">
          <SliderAmount />
        </div>
      </div>
      <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
        <div className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left">
          <p className="text-lg"></p>
        </div>
        <Link
          to="/ifin/apply/identity"
          className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600 hover:font-semibold"
        >
          <p className="text-lg">Next</p>
        </Link>
      </div>
    </div>
  );
}
