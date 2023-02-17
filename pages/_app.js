import "../styles/globals.css";
import { Montserrat } from "@next/font/google";

// context
import { DateProvider } from "../context/dateContext";

//
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// font
const source = Montserrat({
  subsets: ["latin"],
  variable: "--font-mon",
});
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <DateProvider>
      <QueryClientProvider client={queryClient}>
        <div className={`${source.variable} font-sans`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </DateProvider>
  );
}
