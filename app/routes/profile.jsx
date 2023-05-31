import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createProfile } from "~/models/profile.server";
import { requireUserId } from "~/session.server";
import {
  FaRegUser
} from "react-icons/fa";

function update(){
  alert('update sucessfully');
} 
function save(){
  alert('save sucessfully');
} 

export async function action({ request }) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const gmail = formData.get("gmail");
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
      { errors: { firstname: "firstname is required", lastname: null, gmail: null, phone: null, account:null, birthdate: null, address1: null, address2: null, country: null, state: null, postalcode: null, city: null, } },
      { status: 400 }
    );
  }

  if (typeof lastname !== "string" || lastname.length === 0) {
    return json(
      { errors: { firstname: null, lastname: "lastname is required", gmail: null, phone: null, account:null, birthdate: null, address1: null, address2: null, country: null, state: null, postalcode: null, city: null, } },
      { status: 400 }
    );
  }

  if (typeof gmail !== "string" || gmail.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: "gmail is required", phone: null, account:null, birthdate: null, address1: null, address2: null, country: null, state: null, postalcode: null, city: null, } },
      { status: 400 }
    );
  }

  if (typeof phone !== "string" || phone.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: "phone is required", account:null, birthdate: null, address1: null, address2: null, country: null, state: null, postalcode: null, city: null, } },
      { status: 400 }
    );
  }

  if (typeof account !== "string" || account.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:"account is required", birthdate: null, address1: null, address2: null, country: null, state: null, postalcode: null, city: null, } },
      { status: 400 }
    );
  }

  if (typeof birthdate !== "string" || birthdate.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, birthdate: "birthdate is required", address1: null, address2: null, country: null, state: null, postalcode: null, city: null, } },
      { status: 400 }
    );
  }

  if (typeof address1 !== "string" || address1.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, birthdate: null, address1: "address1 is required", address2: null, country: null, state: null, postalcode: null, city: null,} },
      { status: 400 }
    );
  }

  if (typeof address2 !== "string" || address2.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, birthdate: null, address1: null, address2: "address2 is required", country: null, state: null, postalcode: null, city: null,} },
      { status: 400 }
    );
  }

  if (typeof country !== "string" || country.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, birthdate: null, address1: null, address2: null, country: "country is required", state: null, postalcode: null, city: null,} },
      { status: 400 }
    );
  }

  if (typeof state !== "string" || state.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, birthdate: null, address1: null, address2: null, country: null, state: "state is required", postalcode: null, city: null,} },
      { status: 400 }
    );
  }

  if (typeof postalcode !== "string" || postalcode.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, birthdate: null, address1: null, address2: null, country: null, state: null, postalcode:"postalcode is required", city: null,} },
      { status: 400 }
    );
  }

  if (typeof city !== "string" || city.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, birthdate: null, address1: null, address2: null, country: null, state: null, postalcode: null, city: "city is required",} },
      { status: 400 }
    );
  }

  const profile = await createProfile({ firstname, lastname, gmail, phone, account, birthdate, address1, address2, country, state, postalcode, city, userId });

  return redirect(`/profile/${profile.id}`);
}

export default function NewProfilePage() {
  const actionData = useActionData();
  const firstnameRef = React.useRef(null);
  const lastnameRef = React.useRef(null);
  const gmailRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const accountRef = React.useRef(null);
  const birthdateRef = React.useRef(null);
  const address1Ref = React.useRef(null);
  const address2Ref = React.useRef(null);
  const countryRef = React.useRef(null);
  const stateRef = React.useRef(null);
  const postalcodeRef = React.useRef(null);
  const cityRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.firstname) {
      firstnameRef.current?.focus();
    } else if (actionData?.errors?.lastname) {
      lastnameRef.current?.focus();
    } else if (actionData?.errors?.gmail) {
      gmailRef.current?.focus();
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

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <body className='${open ? "ml-0" : "ml-60"} ml-72 flex bg-white p-6'>
        <div className="mx-10 my-6 w-full">
          <div>
          <FaRegUser className="inline-block text-3xl" />
            <span className="ml-4 align-middle font-poppins text-3xl font-bold">
              Your Profile
            </span>
          </div>
      <div className="mr-3 flex w-full items-center flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
      <div className=" text-lg static text-black font-mono rounded-md text-left w-full h-full mx-5 my-5 ">
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>First Name: </span>
          <input
            ref={firstnameRef}
            name="firstname"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.firstname ? true : undefined}
            aria-errormessage={
              actionData?.errors?.firstname ? "firstname-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.firstname && (
          <div className="pt-1 text-red-500" id="firstname-error">
            {actionData.errors.firstname}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Last Name: </span>
          <input
            ref={lastnameRef}
            name="lastname"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.lastname ? true : undefined}
            aria-errormessage={
              actionData?.errors?.lastname ? "lastname-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.lastname && (
          <div className="pt-1 text-red-700" id="lastname-error">
            {actionData.errors.lastname}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>E-Mail: </span>
          <input
            ref={gmailRef}
            name="gmail"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.gmail ? true : undefined}
            aria-errormessage={
              actionData?.errors?.gmail ? "gmail-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.gmail && (
          <div className="pt-1 text-red-700" id="gmail-error">
            {actionData.errors.gmail}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Phone: </span>
          <input
            ref={phoneRef}
            name="phone"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.phone ? true : undefined}
            aria-errormessage={
              actionData?.errors?.phone ? "phone-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.phone && (
          <div className="pt-1 text-red-700" id="phone-error">
            {actionData.errors.phone}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Account: </span>
          <input
            ref={accountRef}
            name="account"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.account ? true : undefined}
            aria-errormessage={
              actionData?.errors?.account ? "account-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.account && (
          <div className="pt-1 text-red-700" id="account-error">
            {actionData.errors.account}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Date of Birth: </span>
          <input
            ref={birthdateRef}
            name="birthdate"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.date ? true : undefined}
            aria-errormessage={
              actionData?.errors?.date ? "date-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.date && (
          <div className="pt-1 text-red-700" id="date-error">
            {actionData.errors.date}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Address1: </span>
          <input
            ref={address1Ref}
            name="address1"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.address1 ? true : undefined}
            aria-errormessage={
              actionData?.errors?.address1 ? "address1-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.address1 && (
          <div className="pt-1 text-red-700" id="address1-error">
            {actionData.errors.address1}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Address2: </span>
          <input
            ref={address2Ref}
            name="address2"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.address2 ? true : undefined}
            aria-errormessage={
              actionData?.errors?.address2 ? "address2-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.address2 && (
          <div className="pt-1 text-red-700" id="address2-error">
            {actionData.errors.address2}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Country: </span>
          <input
            ref={countryRef}
            name="country"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.country ? true : undefined}
            aria-errormessage={
              actionData?.errors?.country ? "country-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.country && (
          <div className="pt-1 text-red-700" id="country-error">
            {actionData.errors.country}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>State: </span>
          <input
            ref={stateRef}
            name="state"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.state ? true : undefined}
            aria-errormessage={
              actionData?.errors?.state ? "state-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.state && (
          <div className="pt-1 text-red-700" id="state-error">
            {actionData.errors.state}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Postal Code: </span>
          <input
            ref={postalcodeRef}
            name="postalcode"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.postalcode ? true : undefined}
            aria-errormessage={
              actionData?.errors?.postalcode ? "postalcode-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.postalcode && (
          <div className="pt-1 text-red-700" id="postalcode-error">
            {actionData.errors.postalcode}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>City: </span>
          <input
            ref={cityRef}
            name="city"
            className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
            aria-invalid={actionData?.errors?.city ? true : undefined}
            aria-errormessage={
              actionData?.errors?.city ? "city-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.city && (
          <div className="pt-1 text-red-700" id="city-error">
            {actionData.errors.city}
          </div>
        )}
      </div>
      </div>

      <div className="text-right">
        <button onClick={save}
          type="submit"
          className="rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-400"
        >
          Save
        </button>
      </div>
      <div className="text-right">
        <button onClick={update} 
          type="submit"
          className="rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-400"
        >
          Update
        </button>
      </div>
      </div>
      </div>
      </body>
    </Form>
  );
}