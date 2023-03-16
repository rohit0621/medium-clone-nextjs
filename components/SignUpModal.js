import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

const signInMethods = [
  {
    method: "Google",
    logo: <FcGoogle size={20} />,
  },
  {
    method: "Facebook",
    logo: <AiFillFacebook size={20} color="#3b5998" />,
  },
  {
    method: "email",
    logo: <TfiEmail size={20} />,
  },
];

export default function signUpModal(props) {
  return (
    <>
      {props.showSignUpModal ? (
        <>
          <div
            className="bg-modal-rgba justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => props.modalNotActive(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*container*/}
              <div
                className="border-0 rounded-md drop-shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* content */}
                <Link
                  href="/"
                  onClick={() => props.modalNotActive(false)}
                  className="self-end m-4"
                >
                  <RxCross1 className="w-4 h-4 text-gray-500 hover:text-gray-800" />
                </Link>
                {/* <button
                  type="button"
                  onClick={() => props.modalNotActive(false)}
                  className="self-end m-4"
                >
                  <RxCross1 className="w-4 h-4 text-gray-500 hover:text-gray-800" />
                </button> */}
                <div className="px-12 flex flex-col items-center">
                  <div className="mt-12">
                    <p className="text-3xl mt-4">Join Medium.</p>
                  </div>
                  <div className="mt-20 flex flex-col gap-2">
                    {signInMethods.map((item, id) => (
                      <div
                        key={id}
                        className="border-solid border border-gray-800 rounded-full p-6 py-2.5 flex gap-2 items-center"
                      >
                        {item.logo}
                        <p className="text-sm">Sign in with {item.method}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 flex gap-1">
                    <p>Already have an account?</p>
                    <Link
                      href="/login"
                      className="text-green-700 font-bold"
                      //   onClick={showLoginModal}
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="mt-24 mb-28 flex max-w-xl">
                    <p className=" text-xs text-gray-500 text-center">
                      Click “Sign Up" to agree to Medium’s
                      <Link href="/terms" className="px-1 underline">
                        Terms of Service
                      </Link>
                      and acknowledge that {"\n"} Medium’s
                      <Link href="/privacy" className="px-1 underline">
                        Privacy Policy
                      </Link>
                      applies to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
