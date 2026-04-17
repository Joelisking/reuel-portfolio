import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { urlFor } from '@/sanity/client';
import { PortableText } from 'next-sanity';

const fallbackBio = [
  'Reuel Agyapong is an aspiring interior designer with a focus on spatial design, furniture, and material exploration. Her work combines creative thinking with hands-on making, exploring how form, structure, and materials come together in design.',
  'With a foundation in design principles, Reuel develops ideas through sketching, modeling, and iterative processes. Her projects demonstrate an understanding of proportion, balance, and the relationship between solid form and open space.',
  'Through studies in color, composition, and three-dimensional design, her work reflects a growing ability to create thoughtful and visually engaging designs.',
];

interface AboutProps {
  data?: {
    portrait?: any;
    heading?: string;
    headingItalic?: string;
    bio?: any;
    focus?: string;
    skills?: string;
    education?: string;
  };
}

export function About({ data }: AboutProps) {
  const portraitSrc = data?.portrait
    ? urlFor(data.portrait).width(800).quality(80).url()
    : '/ruru.JPG';

  return (
    <section
      id="about"
      className="px-6 md:px-16 lg:px-24 py-12 md:py-20 bg-[#1A1714]">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
          <ScrollReveal className="md:col-span-5">
            <div className="aspect-3/4 relative img-hover-container overflow-hidden bg-[#2a2520]">
              <Image
                src={portraitSrc}
                alt="Reuel Agyapong"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-7 md:pt-8" delay={120}>
            <div className="flex items-center gap-6 mb-8">
              <span className="label text-[#C4B8A8]">About</span>
              <div className="flex-1 h-px bg-[#2a2520]" />
            </div>

            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] text-[#F5F0EA] leading-[1.05] mb-6">
              {data?.heading || 'Designing with'}
              <br />
              <span className="font-display-italic">
                {data?.headingItalic || 'intention'}
              </span>
            </h2>

            <div className="space-y-4 text-[0.9375rem] leading-[1.75] text-[#A89E91]">
              {data?.bio ? (
                <PortableText value={data.bio} />
              ) : (
                fallbackBio.map((p, i) => <p key={i}>{p}</p>)
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <span className="label text-[#7A7168] block mb-1">
                  Focus
                </span>
                <span className="text-[#F5F0EA] text-sm">
                  {data?.focus ||
                    'Interior Design & Spatial Planning'}
                </span>
              </div>
              <div>
                <span className="label text-[#7A7168] block mb-1">
                  Skills
                </span>
                <span className="text-[#F5F0EA] text-sm">
                  {data?.skills ||
                    '3D Visualization, Space Planning, Sketching, Model Making'}
                </span>
              </div>
              <div>
                <span className="label text-[#7A7168] block mb-1">
                  Education
                </span>
                <span className="text-[#F5F0EA] text-sm">
                  {data?.education ||
                    'The Ohio State University (Incoming)'}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
