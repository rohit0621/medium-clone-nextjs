import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const colors = {
  primary: {
    backgroundyellow: "#FFBF17",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
