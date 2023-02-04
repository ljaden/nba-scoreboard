import "../styles/globals.css";
import { Roboto_Mono } from "@next/font/google";

// context
import { DateProvider } from "../context/dateContext";

// components
import Navbar from "../components/Navbar/Navbar";

// font
const source = Roboto_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <DateProvider>
      <main className={`${source.className} flex flex-col sm:flex-row`}>
        <div className="w-full min-w-[30%] sm:w-[30%] sm:h-screen bg-[#ecf0f3] p-4 ease-in duration-500  sm:overflow-y-scroll scroll-pr-4">
          <Navbar />
        </div>
        <div className="w-full sm:w-[70%] p-4">
          <Component {...pageProps} />
        </div>
      </main>
    </DateProvider>
  );
}
