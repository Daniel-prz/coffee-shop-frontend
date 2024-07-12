"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { useContext } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";

export default function Header() {
  const { setShow, show, cartItems } = useContext(CartContext);
  const { isLoggedIn, logOut } = useContext(UserContext);
  const pathname = usePathname();
  console.log(pathname);
  console.log(isLoggedIn);

  return (
    <div className="flex flex-col md:flex-row justify-around pt-12 items-center">
      <div className="">
        <Link href={`/`}>
          <h1 className="cursor-pointer text-4xl mb-4 md:mb-0">Cafe</h1>
        </Link>
        <p></p>
      </div>
      <nav className="gap-12 flex flex-row text-xl">
        {!isLoggedIn && pathname === "/" && (
          <Link href="/UserAuth">Log In</Link>
        )}
        {isLoggedIn && <button onClick={logOut}>Log Out</button>}
        {pathname !== "/UserAuth" && pathname !== "/SignUp" && (
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            Cart {cartItems.length}
          </button>
        )}
      </nav>
    </div>
  );
}
