import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <ScrollToTop />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp;
