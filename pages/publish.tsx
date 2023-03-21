import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import mediumLogo from "../public/mediumLogo.png";
import { HiOutlineBell } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import Carousel from "react-material-ui-carousel";
import { Playfair_Display } from "@next/font/google";
import { supabase } from "../lib/supabaseClient";

const playfair_Display = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const items = [
  {
    id: 1,
    title: "carousel 1",
  },
  {
    id: 2,
    title: "carousel 2",
  },
  {
    id: 3,
    title: "carousel 3",
  },
];
const publish = () => {
  const [titleInputValue, setTitleInputValue] = useState(false);
  const [descInputValue, setDescInputValue] = useState(false);
  function titleInput(e) {
    if (e.target.value != "") {
      setTitleInputValue(true);
    } else setTitleInputValue(false);
  }
  function descInput(e) {
    if (e.target.value != "") {
      setDescInputValue(true);
    } else setDescInputValue(false);
  }
  return (
    <div className="h-full text-3xl font-bold">
      <Head>
        <title>Publish</title>
      </Head>
      {/* HEADER */}
      <div id="header" className="flex flex-row justify-between mx-48 py-4">
        <div className="flex flex-row gap-2 items-center">
          <Link href="/">
            <Image src={mediumLogo} className="h-10 w-10 " alt="medium-logo" />
          </Link>
          <p className="text-sm font-normal">Draft in Rohit Kumar</p>
          <p className="text-sm font-normal ml-3 text-gray-500">Saved</p>
        </div>
        <div className="flex flex-row gap-4 items-center gap-4">
          <button className="bg-green-700 rounded-full px-2 py-1 text-sm text-white font-light">
            Publish
          </button>
          <button>
            <BsThreeDots size={20} className="text-gray-500" />
          </button>
          <button>
            <HiOutlineBell size={24} />
          </button>
          <button className="bg-green-800 rounded-full w-8 h-8">
            <p className="text-lg font-normal text-white">R</p>
          </button>
        </div>
      </div>
      {/* BODY */}
      <div className={`${playfair_Display.className} mx-72 mt-12 mb-96`}>
        <form
          name="myForm"
          action="/action_page.php"
          // onsubmit="return validateForm()"
          method="post"
          className="flex flex-col "
        >
          <div className="flex items-center gap-4">
            {titleInputValue ? (
              <p className="text-md text-gray-500">Title</p>
            ) : (
              <CiCirclePlus
                className="h-10 w-10 text-gray-500"
                strokeWidth={0}
              />
            )}
            <div className="h-16 w-px bg-gray-500"></div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="text-5xl  p-2 focus:outline-0"
              autoFocus
              onChange={titleInput}
            />
          </div>
          <div className="flex items-center gap-4">
            {descInputValue ? (
              <p className="text-md text-gray-500">Title</p>
            ) : (
              <CiCirclePlus
                className="h-10 w-10 text-gray-500"
                strokeWidth={0}
              />
            )}
            <input
              type="text"
              name="description"
              placeholder="Tell your story..."
              className="p-2 text-xl  text-gray-300 focus:outline-0"
              onChange={descInput}
            />
          </div>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
      <div className="bg-gray-200 sticky bottom-0 ">
        <Carousel height={300} navButtonsAlwaysVisible indicators={false}>
          {items.map((item, i) => (
            <div key={i} className="flex h-full items-center justify-center">
              <p>{item.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// async function handleClick() {
//   await supabase.from("countries").insert({ id: 5, name: "Denmark" });
//   console.log("first");
// }
// handleClick();

// export default publish;

//FOR styling Placeholder//

// const [showPlaceholder, setShowPlaceholder] = React.useState(true);
//   const [value, setValue] = React.useState("");
//   const show = () => setShowPlaceholder(true);
//   const hide = () => setShowPlaceholder(false);
//   const update = (e) => setValue(e.currentTarget.value);

// <div style={{ position: "relative" }}>
// {showPlaceholder && !value && (
//   <div
//     style={{
//       position: "absolute",
//       left: 5,
//       top: 0,
//       pointerEvents: "none",
//     }}
//   >
//     <span>custom {"  "}</span>
//     <span style={{ color: "red" }}>element {"  "}</span>
//     <span style={{ color: "blue" }}>here {"  "}</span>
//   </div>
// )}
// <input onFocus={hide} onBlur={show} onChange={update} />
// </div>
