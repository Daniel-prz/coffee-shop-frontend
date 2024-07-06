import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex">
      <nav>
        <ul className="flex flex-col sm:flex-row">
          <li>
            <Link href="/">LinkedIn</Link>
          </li>
          <li>
            <Link href="/">GitHub</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
