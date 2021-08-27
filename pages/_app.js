import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <ScrollToTop />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default MyApp;
