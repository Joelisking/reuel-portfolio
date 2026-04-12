import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { LightboxTrigger } from '@/components/lightbox';

const items = [
  {
    src: '/assets/IMG_1870.JPG',
    alt: 'Color theory study',
    label: 'Color Theory',
  },
  {
    src: '/assets/first-floor-plan.jpg',
    alt: 'First floor plan',
    label: 'Floor Planning',
  },
  {
    src: '/assets/office room 11.jpg',
    alt: '3D office render',
    label: '3D Modeling',
  },
  {
    src: '/assets/3D.JPG',
    alt: 'Scale model',
    label: 'Model Making',
  },
];

export function AreasOfInterest() {
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
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <LightboxTrigger src={item.src} alt={item.alt}>
                <div className="img-hover-container aspect-square relative bg-[#EDE8E1] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
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
          ))}
        </div>
      </div>
    </section>
  );
}
