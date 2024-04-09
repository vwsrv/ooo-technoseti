import { Roboto, Montserrat, Rubik } from "next/font/google";

export const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "block",
  fallback: ["sans-serif"]
});

export const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "500", "700"],
  variable: "--font-montserrat",
  display: "block",
  fallback: ["sans-serif"]
});