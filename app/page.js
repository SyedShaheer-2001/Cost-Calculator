import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import '@/app/globals.css';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Estimate from './components/Estimate';
import { TypeProvider } from '../context/TypeContext';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Benefits from './components/Benifits';
import Content from './components/Content';
import FAQ from './components/FAQ';
export default function Home() {
  return (
    <>
     
      <Navbar/>
         <section id="pricing"><Pricing /></section>
      <section id="content"><Content /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="benefits"><Benefits /></section>
      <section id="faq"><FAQ /></section>
      <section id="cta"><CTA /></section>
      <Footer/>
     
    </>
  );
}
