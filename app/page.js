import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import '@/app/globals.css';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CTA/>
    </>
  );
}
