import { Navigation } from '@/components/navigation';
import { LightboxProvider } from '@/components/lightbox';
import { Hero } from '@/components/hero';
import { FeaturedImage } from '@/components/featured-image';
import { SelectedWorks } from '@/components/selected-works';
import { About } from '@/components/about';
import { AreasOfInterest } from '@/components/areas-of-interest';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <LightboxProvider>
      <Navigation />
      <Hero />
      <FeaturedImage />
      <SelectedWorks />
      <About />
      <AreasOfInterest />
      <Contact />
      <Footer />
    </LightboxProvider>
  );
}
