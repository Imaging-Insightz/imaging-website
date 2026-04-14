import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { IndiaFirst } from '@/components/IndiaFirst';
import { WhyGenomics } from '@/components/WhyGenomics';
import { ReportsCatalog } from '@/components/ReportsCatalog';
import { HowItWorks } from '@/components/HowItWorks';
import { Personas } from '@/components/Personas';
import { Partners } from '@/components/Partners';
import { About } from '@/components/About';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Divider } from '@/components/Divider';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Divider />
      <TrustStrip />
      <Divider />
      <IndiaFirst />
      <Divider />
      <WhyGenomics />
      <Divider />
      <ReportsCatalog />
      <Divider />
      <HowItWorks />
      <Divider />
      <Personas />
      <Divider />
      <Partners />
      <Divider />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
}
