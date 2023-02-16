import "../styles/globals.css";
import { Montserrat } from "@next/font/google";

// context
import { DateProvider } from "../context/dateContext";
import { SWRConfig } from "swr";

import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

// font
const source = Montserrat({
  subsets: ["latin"],
  variable: "--font-mon",
});
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <DateProvider>
      <SWRConfig
        value={{
          dedupingInterval: 6000,
          revalidateOnFocus: false,
          keepPreviousData: true,
        }}
      >
        <div className={`${source.variable} font-sans`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </SWRConfig>
    </DateProvider>
  );
}
