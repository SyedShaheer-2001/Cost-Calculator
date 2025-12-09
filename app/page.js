import Navbar from '@/app/Sections/Navbar';
import Hero from '@/app/components/Hero';
import '@/app/globals.css';
import CTA from './components/CTA';
import Footer from './Sections/Footer';
import Estimate from './components/Estimate';
import { TypeProvider } from '../context/TypeContext';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Benefits from './components/Benifits';
import Content from './components/Content';
import FAQ from './components/FAQ';
import Breakdown from './components/Breakdown';
export default function Home() {
  return (
    <>

    <div
        className="bg-black/85 bg-cover bg-center"
        style={{
          backgroundImage: "url('/myGallery/heroBG.png')"
        }}
      >
        <Navbar/>
      <section  id="pricing"><Pricing /></section>
      </div>
      <section  id="content"><Content /></section>
       <Breakdown/>
      {/* <section id="testimonial"><Testimonial /></section> */}
      <section  id="benefits"><Benefits /></section>
      <section id="faq"><FAQ /></section>
      <section id="cta"><CTA /></section>
      {/* <Footer/> */}
     
    </>
  );
}
