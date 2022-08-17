import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#1F282F]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
