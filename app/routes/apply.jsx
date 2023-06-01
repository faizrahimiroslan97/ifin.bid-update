import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createApply } from "~/models/apply.server";
import { requireUserId } from "~/session.server";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaRegCreditCard,
} from "react-icons/fa";
import dashStyles from "~/styles/global.css";


export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Apply" }];
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export async function action({ request }) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const type = formData.get("type");


  if (typeof type !== "string" || type.length === 0) {
    return json(
      { errors: { type: "type is required",  } },
      { status: 400 }
    );
  }

  const apply = await createApply({ type, userId });

  return redirect(`/apply/${apply.id}`);
}

export default function DashboardPage() {
  const actionData = useActionData();
  const typeRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.type) {
      typeRef.current?.focus();
    }
  }, [actionData]);

    return(
      
        <main>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </head>
  <Form>
        <body className='${open ? "ml-0" : "ml-60"} ml-72 flex bg-white p-6'>
          <div className="mx-10 my-6 w-full">
            <div>
            <FaRegCreditCard className="inline-block text-3xl" />
              <span className="ml-4 align-middle font-poppins text-3xl font-bold">
                Apply of Fianacing
              </span>
            </div>
            <div className="flex-row">
              <div className="w-3/5 flex-col p-0">
                <div className="m-auto ml-0 flex flex-row pb-2 pt-4 font-poppins">
                  <div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                    <div className="">
                      <span className="mr-4 align-middle text-xl font-bold ">
                        1.Financing Options
                      </span>
                      <span className="mr-4 align-middle text-xl font-bold">
                        2.Identify Verification
                      </span>
                      <span className="mr-4 align-middle text-xl font-bold">
                        3.Income Verification
                      </span>
                      <span className="mr-4 align-middle text-xl font-bold">
                        4.Review Data
                      </span>
                      <div>Choose Financing Service Specifications</div>

                      <div>
                        <label className="flex w-full flex-col gap-1">
                          <span>type: </span>
                        <input
                          ref={typeRef}
                          name="type"
                          className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
                          aria-invalid={actionData?.errors?.type ? true : undefined}
                          aria-errormessage={
                          actionData?.errors?.type ? "type-error" : undefined
                        }
                        />
                        </label>
                          {actionData?.errors?.type && (
                        <div className="pt-1 text-red-700" id="type-error">
                        {actionData.errors.type}
                        </div>
                        )}
                      </div>

                      <div className="text-right">
                        <button
                        type="submit"
                        className="rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-400"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </Form>
    </main>
    
    )
}

//<button><div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
//<FaHandHoldingUsd className="inline-block text-3xl" />
//  Personal Financing
//</div></button>

//<button><div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
//<TbHomeDollar className="inline-block text-3xl" />
//  Home Financing
//</div></button>

//<button><div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
//<FaCarSide className="inline-block text-3xl" />
//  Car Financing
//</div></button>

//<button><div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
//<FaRegBuilding className="inline-block text-3xl" />
//  Business Financing
//</div></button>

//<div><h1>
 //                         Total Amount
   //                       <div> <input type="range" min="0" max="10000000" class="slider" id="myRange"></input></div>
     //                     <p>Value: <span id="TA"></span></p>
          //                </h1>
       ///                 <h1>
//                          Preferred Financing Tenure
  //                        <div> <input className="slide:bg-lime-600" type="range" min="0" max="10000000" class="slider" id="myRange"></input></div>
    //                      <p>Value: <span id="PFT"></span></p>
      //                  </h1>
///
   //                   </div>