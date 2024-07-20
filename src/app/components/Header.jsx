"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { useContext } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";

export default function Header() {
  const { setShow, show, cartItems, cartLength } = useContext(CartContext);
  const { isLoggedIn, logOut } = useContext(UserContext);
  const pathname = usePathname();
  console.log(pathname);
  console.log(isLoggedIn);

  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="flex flex-col md:flex-row justify-around md:gap-24 pt-12 items-center header-border w-[80%] pb-4">
        <div className="">
          <Link href={`/`}>
            <h1 className="mb-4 text-4xl cursor-pointer md:mb-2 bold header-font">Cafe</h1>
          </Link>
          <p></p>
        </div>
        <nav className="flex flex-row gap-12 text-xl">
          {!isLoggedIn && pathname === "/" && (
            <Link href="/UserAuth" className="hover:font-medium">
              Log In
            </Link>
          )}
          {isLoggedIn && (
            <button className="hover:font-medium" onClick={logOut}>
              Log Out
            </button>
          )}
          {pathname !== "/UserAuth" && pathname !== "/SignUp" && (
            <>
              <button
                onClick={() => {
                  setShow(true);
                }}
                className="hover:font-medium "
              >
                Cart {cartLength > 0 && cartLength}
                {/* Conditionally render cart count */}
              </button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
