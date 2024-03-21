import "@/styles/globals.css";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets:["latin"],
  variable:'--font-inter'
})


export default function App({ Component, pageProps }) {
  return(
    <main className={`${inter.variable} font-sans`}>
      return <Component {...pageProps} />;
    </main>
  )
}
