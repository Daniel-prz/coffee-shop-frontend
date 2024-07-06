import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-around pt-12">
      <div className="">
        <h1> Cafe</h1>
        <p></p>
      </div>
      <nav>
        <Link href="./UserAuth">Log In</Link>
      </nav>
    </div>
  );
}
