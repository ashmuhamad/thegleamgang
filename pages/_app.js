import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import Layout from "../components/Layout";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <AnimatePresence>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </SessionProvider>
    </>
  );
}
export default App;
