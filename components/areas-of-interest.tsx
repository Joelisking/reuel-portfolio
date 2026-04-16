import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { LightboxTrigger } from '@/components/lightbox';
import { urlFor } from '@/sanity/client';

const fallbackItems = [
  { _id: '1', label: 'Interior Design', image: null, localSrc: '/assets/living-room-design.jpg' },
  { _id: '2', label: 'Photography', image: null, localSrc: '/assets/IMG_5195.JPG' },
  { _id: '3', label: '2D Design & Fine Art', image: null, localSrc: '/assets/51147797-3237-476C-9A50-D4C19FEF3398.jpg' },
  { _id: '4', label: 'Architectural Drawing', image: null, localSrc: '/assets/second-floor-plan.jpg' },
];

interface AreaItem {
  _id: string;
  label: string;
  image: any;
  localSrc?: string;
}

interface AreasOfInterestProps {
  items?: AreaItem[];
}

export function AreasOfInterest({ items }: AreasOfInterestProps) {
  const data = items && items.length > 0 ? items : fallbackItems;

  return (
    <section className="px-6 md:px-16 lg:px-24 py-12 md:py-20">
      <div className="max-w-350 mx-auto">
        <ScrollReveal>
          <div className="mb-8 md:mb-14">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#1A1714] leading-none">
              Areas of{' '}
              <span className="font-display-italic">Interest</span>
            </h2>
            <div className="h-px bg-[#E0D8CE] mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item, i) => {
            const src = item.image
              ? urlFor(item.image).width(600).quality(80).url()
              : item.localSrc || '';

            return (
              <ScrollReveal key={item._id} delay={i * 80}>
                <LightboxTrigger src={src} alt={item.label}>
                  <div className="img-hover-container aspect-square relative bg-[#EDE8E1] overflow-hidden">
                    <Image
                      src={src}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </LightboxTrigger>
                <span className="label text-[0.5625rem] mt-2 block">
                  {item.label}
                </span>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
