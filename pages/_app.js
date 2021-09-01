import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function MyApp({ Component, pageProps }) {
  return (
    <div>
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
