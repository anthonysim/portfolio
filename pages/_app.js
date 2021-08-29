import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Fade } from "react-awesome-reveal";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default MyApp;
