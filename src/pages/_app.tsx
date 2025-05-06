import Footer from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideLayout = router.pathname === "/login" || router.pathname === "/register";

  return (
    <>

      {hideLayout ? (
        <Component {...pageProps} />

      )
        : (
          <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>

        )
      }
    </>
  )
}
