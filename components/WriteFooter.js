import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WriteFooter() {
  return (
    <div className="grid grid-flow-row grid-flow-col gap-4 justify-between px-10 py-5 ">
      <div className="grid grid-flow-row grid-flow-col gap-2 justify-center">
        <Image src="/mediumLogo.png" width="60" height="60" alt="" />
        <Link href="/" className="text-3xl font-bold mt-2">
          Medium
        </Link>
      </div>
      <div className="text-sm ">Every idea needs a Medium</div>
      <div className=" grid grid-flow-row grid-flow-col gap-4">
        <Link href="/" className="text-sm">
          About
        </Link>
        <Link href="/" className="text-sm">
          Terms
        </Link>
        <Link href="/" className="text-sm">
          Privacy
        </Link>
        <Link href="/" className="text-sm">
          Help
        </Link>
      </div>
    </div>
  );
}
