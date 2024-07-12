import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <CartProvider>
          <body>{children}</body>
        </CartProvider>
      </UserProvider>
    </html>
  );
}