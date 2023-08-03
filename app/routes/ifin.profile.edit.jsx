import { json, redirect } from "@remix-run/node";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, Form, useActionData, useSearchParams } from "@remix-run/react";

import { updateUser } from "~/models/user.server";
import { getProfileByUserId } from "~/models/profile.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { useEffect, useRef } from "react";
import DatePicker from "react-datepicker";

export async function action({ request }) {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const account = formData.get("account");
  const birthdate = formData.get("birthdate");
  const address1 = formData.get("address1");
  const address2 = formData.get("address2");
  const country = formData.get("country");
  const state = formData.get("state");
  const postalcode = formData.get("postalcode");
  const city = formData.get("city");

  if (typeof firstname !== "string" || firstname.length === 0) {
    return json(
      {
        errors: {
          firstname: "firstname is required",
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof lastname !== "string" || lastname.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: "lastname is required",
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof email !== "string" || email.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: "email is required",
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof phone !== "string" || phone.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: "phone is required",
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof account !== "string" || account.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: "account is required",
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof birthdate !== "string" || birthdate.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: "birthdate is required",
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof address1 !== "string" || address1.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: "address1 is required",
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof address2 !== "string" || address2.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: "address2 is required",
          country: null,
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof country !== "string" || country.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: "country is required",
          state: null,
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof state !== "string" || state.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: "state is required",
          postalcode: null,
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof postalcode !== "string" || postalcode.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: "postalcode is required",
          city: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof city !== "string" || city.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          account: null,
          birthdate: null,
          address1: null,
          address2: null,
          country: null,
          state: null,
          postalcode: null,
          city: "city is required",
        },
      },
      { status: 400 }
    );
  }

  const profile = await getProfileByUserId({
    userId,
  });

  const user = await updateUser({
    userId,
    profile,
    email,
    firstname,
    lastname,
    phone,
    account,
    birthdate,
    address1,
    address2,
    country,
    state,
    postalcode,
    city,
  });

  return redirect(`/profile`);
}

export default function ProfileEditPage() {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/ifin/profile";
  const actionData = useActionData();
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const accountRef = useRef(null);
  const birthdateRef = useRef(null);
  const address1Ref = useRef(null);
  const address2Ref = useRef(null);
  const countryRef = useRef(null);
  const stateRef = useRef(null);
  const postalcodeRef = useRef(null);
  const cityRef = useRef(null);

  useEffect(() => {
    if (actionData?.errors?.firstname) {
      firstnameRef.current?.focus();
    } else if (actionData?.errors?.lastname) {
      lastnameRef.current?.focus();
    } else if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.phone) {
      phoneRef.current?.focus();
    } else if (actionData?.errors?.account) {
      accountRef.current?.focus();
    } else if (actionData?.errors?.date) {
      birthdateRef.current?.focus();
    } else if (actionData?.errors?.address) {
      address1Ref.current?.focus();
    } else if (actionData?.errors?.address) {
      address2Ref.current?.focus();
    } else if (actionData?.errors?.address) {
      countryRef.current?.focus();
    } else if (actionData?.errors?.address) {
      stateRef.current?.focus();
    } else if (actionData?.errors?.address) {
      postalcodeRef.current?.focus();
    } else if (actionData?.errors?.address) {
      cityRef.current?.focus();
    }
  }, [actionData]);

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

  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.profile.phone);
  const [account, setAccount] = useState(user.account);
  const [address1, setAddress1] = useState(user.address);
  const [address2, setAddress2] = useState(user.address2);
  const [country, setCountry] = useState(user.country);
  const [state, setState] = useState(user.state);
  const [postalcode, setPostalCode] = useState(user.postalcode);
  const [city, setCity] = useState(user.city);
  const handleChange = (event) => {
    setValue(event.target.value);
    setFirstName(event.target.firstname);
    setLastName(event.target.lastname);
    setEmail(event.target.email);
    setPhone(event.target.phone);
    setAccount(event.target.account);
    setAddress1(event.target.address1);
    setAddress2(event.target.address2);
    setState(event.target.state);
    setCountry(event.target.country);
    setPostalCode(event.target.postalcode);
    setCity(event.target.city);
  };

  const [date, setDate] = useState(new Date());

  const Dropdown = ({ value, options, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="mb-2 mt-0.5 w-full rounded border-2 border-gray-500 px-2 py-2 text-xl hover:cursor-pointer"
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  };

  return (
    <Form method="post" className="flex flex-col pt-20">
      <div className="mt-2 flex w-full flex-row gap-y-4 px-12 py-2 align-middle">
        <div className="w-1/3">
          <div className="m-auto mt-4 h-40 w-40 rounded-full border-2 border-gray-600 p-12 shadow-md drop-shadow-md">
            <FaRegUser className="text-6xl" />
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              className="rounded border-2 border-black bg-gray-200 px-4 py-1 hover:border-gray-500 hover:bg-gray-100"
            >
              Upload image...
            </button>
          </div>
        </div>
        <div className="flex w-2/3 flex-row">
          <div className="ml-4 mr-8 w-1/2">
            <div>
              <h1 className="w-full text-lg font-semibold text-gray-500">
                First Name
              </h1>
              <input
                ref={firstnameRef}
                name="firstname"
                id="firstname"
                onChange={handleChange}
                value={firstname}
                className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
                aria-invalid={actionData?.errors?.firstname ? true : undefined}
                aria-errormessage={
                  actionData?.errors?.firstname ? "firstname-error" : undefined
                }
              />
              {actionData?.errors?.firstname && (
                <div className="pt-1 text-red-500" id="firstname-error">
                  {actionData.errors.firstname}
                </div>
              )}
            </div>
            <div>
              <h1 className="w-full text-lg font-semibold text-gray-500">
                E-mail
              </h1>
              <input
                ref={emailRef}
                name="email"
                id="email"
                onChange={handleChange}
                value={email}
                className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-errormessage={
                  actionData?.errors?.email ? "email-error" : undefined
                }
              />
              {actionData?.errors?.email && (
                <div className="pt-1 text-red-500" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
            <div>
              <h1 className="w-full text-lg font-semibold text-gray-500">
                Identification Number
              </h1>
              <input
                ref={accountRef}
                name="account"
                id="account"
                onChange={handleChange}
                value={account}
                placeholder="XXXXXXXXXXXX"
                className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
                aria-invalid={actionData?.errors?.account ? true : undefined}
                aria-errormessage={
                  actionData?.errors?.account ? "account-error" : undefined
                }
              />
              {actionData?.errors?.account && (
                <div className="pt-1 text-red-500" id="account-error">
                  {actionData.errors.account}
                </div>
              )}
            </div>
          </div>
          <div className="ml-8 mr-4 w-1/2 text-lg">
            <div>
              <h1 className="w-full text-lg font-semibold text-gray-500">
                Last Name
              </h1>
              <input
                ref={lastnameRef}
                name="lastname"
                id="lastname"
                onChange={handleChange}
                value={lastname}
                className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
                aria-invalid={actionData?.errors?.lastname ? true : undefined}
                aria-errormessage={
                  actionData?.errors?.lastname ? "lastname-error" : undefined
                }
              />
              {actionData?.errors?.lastname && (
                <div className="pt-1 text-red-700" id="lastname-error">
                  {actionData.errors.lastname}
                </div>
              )}
            </div>
            <div>
              <h1 className="w-full text-lg font-semibold text-gray-500">
                Mobile Phone No.
              </h1>
              <input
                ref={phoneRef}
                name="phone"
                id="phone"
                onChange={handleChange}
                value={phone}
                placeholder="0XXXXXXXXXX"
                className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
                aria-invalid={actionData?.errors?.phone ? true : undefined}
                aria-errormessage={
                  actionData?.errors?.phone ? "phone-error" : undefined
                }
              />
              {actionData?.errors?.phone && (
                <div className="pt-1 text-red-500" id="phone-error">
                  {actionData.errors.phone}
                </div>
              )}
            </div>
            <div>
              <h1 className="w-full text-lg font-semibold text-gray-500">
                Date of Birth
              </h1>
              <div className="mb-2 mt-0.5">
                <DatePicker
                  className="w-full rounded border-x-0 border-b-2 border-t-0 border-gray-500 bg-gray-100 px-4 py-2 text-xl focus:border-blue-500 focus:outline-none"
                  name="birthdate"
                  id="birthdate"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  showMonthDropdown="true"
                  showYearDropdown="true"
                />
              </div>
              {actionData?.errors?.birthdate && (
                <div className="pt-1 text-red-500" id="birthdate-error">
                  {actionData.errors.birthdate}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex h-1/2 flex-row">
        <div className="ml-4 mr-8 w-1/2 pl-12 text-lg">
          <div>
            <h1 className="w-full text-lg font-semibold text-gray-500">
              Address Line 1
            </h1>
            <input
              ref={address1Ref}
              name="address1"
              id="address1"
              onChange={handleChange}
              value={address1}
              className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
              aria-invalid={actionData?.errors?.address1 ? true : undefined}
              aria-errormessage={
                actionData?.errors?.address1 ? "address1-error" : undefined
              }
            />
            {actionData?.errors?.address1 && (
              <div className="pt-1 text-red-500" id="address1-error">
                {actionData.errors.address1}
              </div>
            )}
          </div>
          <div>
            <h1 className="w-full text-lg font-semibold text-gray-500">
              Country
            </h1>
            <input
              ref={countryRef}
              name="country"
              id="country"
              onChange={handleChange}
              value={country}
              className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
              aria-invalid={actionData?.errors?.country ? true : undefined}
              aria-errormessage={
                actionData?.errors?.country ? "country-error" : undefined
              }
            />
            {actionData?.errors?.country && (
              <div className="pt-1 text-red-500" id="country-error">
                {actionData.errors.country}
              </div>
            )}
          </div>
          <div>
            <h1 className="w-full text-lg font-semibold text-gray-500">
              State
            </h1>
            <input
              ref={stateRef}
              name="state"
              id="state"
              onChange={handleChange}
              value={state}
              className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
              aria-invalid={actionData?.errors?.state ? true : undefined}
              aria-errormessage={
                actionData?.errors?.state ? "state-error" : undefined
              }
            />
            {actionData?.errors?.state && (
              <div className="pt-1 text-red-500" id="state-error">
                {actionData.errors.state}
              </div>
            )}
          </div>
        </div>
        <div className="ml-8 mr-4 w-1/2 pr-12 text-lg">
          <div>
            <h1 className="w-full text-lg font-semibold text-gray-500">
              Address Line 2
            </h1>
            <input
              ref={address2Ref}
              name="address2"
              id="address2"
              onChange={handleChange}
              value={address2}
              className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
              aria-invalid={actionData?.errors?.address2 ? true : undefined}
              aria-errormessage={
                actionData?.errors?.address2 ? "address2-error" : undefined
              }
            />
            {actionData?.errors?.address2 && (
              <div className="pt-1 text-red-500" id="address2-error">
                {actionData.errors.address2}
              </div>
            )}
          </div>
          <div>
            <h1 className="w-full text-lg font-semibold text-gray-500">
              Postal Code
            </h1>
            <input
              ref={postalcodeRef}
              name="postalcode"
              id="postalcode"
              onChange={handleChange}
              value={postalcode}
              className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100  px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
              aria-invalid={actionData?.errors?.postalcode ? true : undefined}
              aria-errormessage={
                actionData?.errors?.postalcode ? "postalcode-error" : undefined
              }
            />
            {actionData?.errors?.postalcode && (
              <div className="pt-1 text-red-500" id="postalcode-error">
                {actionData.errors.postalcode}
              </div>
            )}
          </div>
          <div>
            <h1 className="w-full text-lg font-semibold text-gray-500">City</h1>
            <input
              ref={cityRef}
              name="city"
              id="city"
              onChange={handleChange}
              value={city}
              className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 bg-gray-100 px-2 py-2 text-xl focus:border-blue-500 focus:outline-none"
              aria-invalid={actionData?.errors?.city ? true : undefined}
              aria-errormessage={
                actionData?.errors?.city ? "city-error" : undefined
              }
            />
            {actionData?.errors?.city && (
              <div className="pt-1 text-red-500" id="city-error">
                {actionData.errors.city}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
        <Link
          to="/ifin/profile/"
          className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left hover:cursor-pointer hover:border-t-4 hover:border-red-800"
        >
          <p className="text-lg">Cancel</p>
        </Link>
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <button
          type="submit"
          className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600 hover:font-semibold"
        >
          <p className="text-lg">Save</p>
        </button>
      </div>
    </Form>
  );
}
