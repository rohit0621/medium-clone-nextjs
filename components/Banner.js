import React, { useEffect } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";

const Banner = () => {
  const [showModal, setShowModal] = React.useState(false);
  const modalActive = () => {
    setShowModal(true);
  };
  const modalNotActive = () => {
    setShowModal(false);
  };

  return (
    <>
      <LoginModal showModal={showModal} modalNotActive={modalNotActive} />
      <div
        id="banner"
        className=" px-28 py-12 bg-yellow-500 grid grid-columns-2 grid-flow-col"
      >
        <div>
          <h1 className="text-8xl font-bold">Stay curious.</h1>
          <div className="max-w-360">
            <p className="text-xl pt-4 ">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>
          <button className="rounded-full bg-black text-white px-2 py-1 w-48 h-12 mt-10">
            <Link href="/" className="text-xl" onClick={modalActive}>
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