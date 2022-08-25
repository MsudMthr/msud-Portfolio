import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-ap-southeast-2.hygraph.com/v2/cl77evxzn10fc01un3yeah517/master",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-[#1F282F]">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
