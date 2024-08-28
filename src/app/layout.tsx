import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "@/styles/main.scss";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "VPN",
  description: "Vpn test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${roboto.variable}`}>
        <Navbar />
        <main>{children}</main>
        <div id="custom-modal-root" />
      </body>
    </html>
  );
}
