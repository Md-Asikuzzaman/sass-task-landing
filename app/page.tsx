import FAQs from './sections/FAQs';
import Features from './sections/Features';
import Header from './sections/Header';
import Hero from './sections/Hero';
import LogoTicker from './sections/LogoTicker';
import ProductShowcase from './sections/ProductShowcase';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
    </>
  );
}
