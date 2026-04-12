import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';

export function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 lg:px-24 py-12 md:py-20 bg-[#1A1714]"
    >
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Portrait */}
          <ScrollReveal className="md:col-span-5">
            <div className="aspect-3/4 relative img-hover-container overflow-hidden bg-[#2a2520]">
              <Image
                src="/ruru.JPG"
                alt="Reuel Agyapong"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal
            className="md:col-span-7 md:pt-8"
            delay={120}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="label text-[#C4B8A8]">About</span>
              <div className="flex-1 h-px bg-[#2a2520]" />
            </div>

            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] text-[#F5F0EA] leading-[1.05] mb-6">
              Designing with
              <br />
              <span className="font-display-italic">intention</span>
            </h2>

            <div className="space-y-4 text-[0.9375rem] leading-[1.75] text-[#A89E91]">
              <p>
                Reuel Agyapong is an interior designer and spatial
                planner with a multidisciplinary approach that spans
                residential and commercial interiors, architectural
                visualization, and fine art.
              </p>
              <p>
                With a foundation in Digital Graphics for the Built
                Environment, Reuel brings technical precision to
                every project — from detailed floor plans and
                elevations to fully rendered 3D visualizations that
                communicate a space before it exists.
              </p>
              <p>
                Her work draws on a deep understanding of color
                theory, material relationships, and spatial
                proportion. Each project begins with careful
                research — moodboards, material studies, and client
                dialogue — and culminates in spaces that feel both
                considered and alive.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <span className="label text-[#7A7168] block mb-1">
                  Focus
                </span>
                <span className="text-[#F5F0EA] text-sm">
                  Interior Design
                </span>
              </div>
              <div>
                <span className="label text-[#7A7168] block mb-1">
                  Skills
                </span>
                <span className="text-[#F5F0EA] text-sm">
                  3D Visualization, Space Planning
                </span>
              </div>
              <div>
                <span className="label text-[#7A7168] block mb-1">
                  Education
                </span>
                <span className="text-[#F5F0EA] text-sm">
                  Polytech — CM 124
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
