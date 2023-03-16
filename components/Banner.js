import React, { useEffect } from "react";
import Link from "next/link";
import SignUpModal from "./SignUpModal";
import { Playfair_Display } from "@next/font/google";

const playfair_Display = Playfair_Display({
  weight: "800",
  subsets: ["latin"],
});

const Banner = () => {
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);
  const signUpModalActive = () => {
    setShowSignUpModal(true);
  };
  const signUpModalNotActive = () => {
    setShowSignUpModal(false);
  };
  return (
    <>
      <SignUpModal
        showSignUpModal={showSignUpModal}
        modalNotActive={signUpModalNotActive}
      />
      <div
        id="banner"
        className=" px-28 py-28 bg-yellow-500 grid grid-columns-2 grid-flow-col"
      >
        <div>
          <h1 className={`${playfair_Display} text-8xl font-medium`}>
            Stay curious.
          </h1>
          <div className="max-w-360">
            <p className="text-xl pt-4 ">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>
          <button className="rounded-full bg-black text-white w-56 h-10 mt-12">
            <Link href="/" className="text-xl" onClick={signUpModalActive}>
              Start Reading
            </Link>
          </button>
        </div>
        {/* <div className='bg-red-300'>
                M M M M M M M M M M M M M M M M M M M M M M M M
          </div> */}
      </div>
      <div className="w-full h-px bg-black"></div>
    </>
  );
};

export default Banner;
