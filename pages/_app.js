import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";

function App({ Component, pageProps: { session, ...pageProps } }) {
  <SessionProvider session={session}>
    <AnimatePresence>
      return <Component {...pageProps} />;
    </AnimatePresence>
  </SessionProvider>;
}

export default App;
