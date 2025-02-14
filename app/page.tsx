import { Banner } from './components/Banner';
import CallToAction from './sections/CallToAction';
import FAQs from './sections/FAQs';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import LogoTicker from './sections/LogoTicker';
import ProductShowcase from './sections/ProductShowcase';

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
