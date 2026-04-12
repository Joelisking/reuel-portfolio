import { Navigation } from '@/components/navigation';
import { LightboxProvider } from '@/components/lightbox';
import { Hero } from '@/components/hero';
import { FeaturedImage } from '@/components/featured-image';
import { SelectedWorks } from '@/components/selected-works';
import { About } from '@/components/about';
import { AreasOfInterest } from '@/components/areas-of-interest';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import {
  getSiteSettings,
  getProjects,
  getAbout,
  getAreasOfInterest,
} from '@/sanity/queries';

export default async function Home() {
  const [settings, projects, about, areas] = await Promise.all([
    getSiteSettings().catch(() => null),
    getProjects().catch(() => []),
    getAbout().catch(() => null),
    getAreasOfInterest().catch(() => []),
  ]);

  return (
    <LightboxProvider>
      <Navigation />
      <Hero
        line1={settings?.heroLine1}
        line2={settings?.heroLine2}
        subtitle={settings?.heroSubtitle}
        description={settings?.heroDescription}
      />
      <FeaturedImage image={settings?.featuredImage} />
      <SelectedWorks projects={projects} />
      <About data={about} />
      <AreasOfInterest items={areas} />
      <Contact
        email={settings?.email}
        instagram={settings?.instagram}
        instagramUrl={settings?.instagramUrl}
        linkedin={settings?.linkedin}
        linkedinUrl={settings?.linkedinUrl}
      />
      <Footer />
    </LightboxProvider>
  );
}
