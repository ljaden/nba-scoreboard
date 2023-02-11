import "../styles/globals.css";
import { Montserrat } from "@next/font/google";

// context
import { DateProvider } from "../context/dateContext";
import { SWRConfig } from "swr";

import Layout from "../components/Layout/Layout";

// font
const source = Montserrat({
  subsets: ["latin"],
  variable: "--font-mon",
});
export default function App({ Component, pageProps }) {
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </SWRConfig>
    </DateProvider>
  );
}
