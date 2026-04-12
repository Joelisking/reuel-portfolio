import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { LightboxTrigger } from '@/components/lightbox';

export function FeaturedImage() {
  return (
    <section className="px-6 md:px-16 lg:px-24 pt-0 pb-8 md:pb-20">
      <ScrollReveal>
        <div className="max-w-350 mx-auto">
          <LightboxTrigger
            src="/assets/office room 15.jpg"
            alt="Fashion Nova conference room presentation wall"
          >
            <div className="img-hover-container aspect-21/9 relative overflow-hidden">
              <Image
                src="/assets/office room 15.jpg"
                alt="Fashion Nova conference room presentation wall"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </LightboxTrigger>
        </div>
      </ScrollReveal>
    </section>
  );
}
