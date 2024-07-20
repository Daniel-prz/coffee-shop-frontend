import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center bg-zinc-900 items-center h-[12vh] text-white">
      <nav className="mb-2 w-full">
        <ul className="flex flex-col sm:flex-row justify-around items-center">
          <li>
            <Link
              className="footer-text-shadow"
              target="_blank"
              href="https://www.linkedin.com/in/daniel-perez-416b2628a/"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              className="footer-text-shadow"
              target="_blank"
              href="https://github.com/Daniel-prz/coffee-shop-frontend"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
