import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { LightboxTrigger } from '@/components/lightbox';
import { urlFor } from '@/sanity/client';

const fallbackProjects = [
  { _id: '1', title: 'Living Room Interior', category: 'Residential Design', image: null, localImage: '/assets/living-room-design.jpg', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
  { _id: '2', title: 'Bathroom Elevation', category: 'Interior Elevation', image: null, localImage: '/assets/interior-elevation.jpg', aspect: 'aspect-[4/3]', colSpan: 'md:col-span-5' },
  { _id: '3', title: 'Second Floor Plan', category: 'Rendered Floor Plan', image: null, localImage: '/assets/second-floor-plan.jpg', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-5' },
  { _id: '4', title: 'Fashion Nova Office', category: 'Commercial Interior', image: null, localImage: '/assets/office room 14.jpg', aspect: 'aspect-[16/9]', colSpan: 'md:col-span-7' },
  { _id: '5', title: 'Bedroom Moodboard', category: 'Concept Design', image: null, localImage: '/assets/moodboard 1 bedroom.jpg', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4' },
  { _id: '6', title: 'Abstract Composition', category: 'Fine Art', image: null, localImage: '/assets/51147797-3237-476C-9A50-D4C19FEF3398.jpg', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4' },
  { _id: '7', title: 'Portrait Study', category: 'Photography', image: null, localImage: '/assets/IMG_0448.jpg', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4' },
  { _id: '8', title: 'Exterior Elevation', category: 'Architectural Drawing', image: null, localImage: '/assets/exterior-elevation-2.jpg', aspect: 'aspect-[4/3]', colSpan: 'md:col-span-6' },
  { _id: '9', title: 'Jabberwocky', category: 'Illustration', image: null, localImage: '/assets/Jabberwocky.jpeg', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-6' },
  { _id: '10', title: 'Building Section', category: 'Technical Drawing', image: null, localImage: '/assets/building-section.jpg', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
  { _id: '11', title: 'Scale Models', category: 'Model Making', image: null, localImage: '/assets/3D 1.JPG', aspect: 'aspect-[4/3]', colSpan: 'md:col-span-5' },
];

interface Project {
  _id: string;
  title: string;
  category: string;
  image: any;
  localImage?: string;
  aspect: string;
  colSpan: string;
}

interface SelectedWorksProps {
  projects?: Project[];
}

export function SelectedWorks({ projects }: SelectedWorksProps) {
  const items = projects && projects.length > 0 ? projects : fallbackProjects;

  return (
    <section
      id="work"
      className="px-6 md:px-16 lg:px-24 pt-10 md:pt-16 pb-12 md:pb-20"
    >
      <div className="max-w-350 mx-auto">
        <ScrollReveal>
          <div className="mb-8 md:mb-14">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#1A1714] leading-none">
              Selected{' '}
              <span className="font-display-italic">Works</span>
            </h2>
            <div className="h-px bg-[#E0D8CE] mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {items.map((project, i) => {
            const src = project.image
              ? urlFor(project.image).width(1200).quality(80).url()
              : project.localImage || '';

            return (
              <ScrollReveal
                key={project._id}
                className={`${project.colSpan}`}
                delay={i < 4 ? i * 80 : 0}
              >
                <LightboxTrigger src={src} alt={project.title}>
                  <div
                    className={`img-hover-container ${project.aspect} relative bg-[#EDE8E1]`}
                  >
                    <Image
                      src={src}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                  </div>
                </LightboxTrigger>
                <div className="mt-3 mb-6">
                  <span className="label text-[0.5625rem]">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-[1.0625rem] mt-0.5 text-[#1A1714]">
                    {project.title}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
