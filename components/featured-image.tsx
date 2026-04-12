import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { LightboxTrigger } from '@/components/lightbox';
import { urlFor } from '@/sanity/client';

interface FeaturedImageProps {
  image?: any;
}

export function FeaturedImage({ image }: FeaturedImageProps) {
  const src = image
    ? urlFor(image).width(1800).quality(85).url()
    : '/assets/office room 15.jpg';
  const alt = 'Featured project';

  return (
    <section className="px-6 md:px-16 lg:px-24 pt-0 pb-8 md:pb-20">
      <ScrollReveal>
        <div className="max-w-350 mx-auto">
          <LightboxTrigger src={src} alt={alt}>
            <div className="img-hover-container aspect-21/9 relative overflow-hidden">
              <Image
                src={src}
                alt={alt}
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
