import "../styles/globals.css";
import { Montserrat } from "@next/font/google";

// context
import { DateProvider } from "../context/dateContext";

import Layout from "../components/Layout/Layout";

// font
const source = Montserrat({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mon",
});

export default function App({ Component, pageProps }) {
  return (
    <DateProvider>
      <div className={`${source.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </DateProvider>
  );
}
