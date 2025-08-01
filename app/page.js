import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import '@/app/globals.css';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Estimate from './components/Estimate';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
       <CTA/> 
      <Footer/>
    </>
  );
}
