import { ScrollReveal } from '@/components/scroll-reveal';

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-24 py-12 md:py-20 border-t border-[#E0D8CE]"
    >
      <div className="max-w-350 mx-auto">
        <ScrollReveal>
          <span className="label block mb-6">Get in Touch</span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-[#1A1714] max-w-150">
            Let&apos;s work
            <br />
            <span className="font-display-italic">together</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="h-px bg-[#E0D8CE] my-8 max-w-sm" />
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
            <div>
              <span className="label block mb-1.5">Email</span>
              <a
                href="mailto:hello@reuelagyapong.com"
                className="text-[#1A1714] text-sm hover:text-[#8B5E3C] transition-colors duration-300"
              >
                hello@reuelagyapong.com
              </a>
            </div>
            <div>
              <span className="label block mb-1.5">Instagram</span>
              <a
                href="#"
                className="text-[#1A1714] text-sm hover:text-[#8B5E3C] transition-colors duration-300"
              >
                @reueldesigns
              </a>
            </div>
            <div>
              <span className="label block mb-1.5">LinkedIn</span>
              <a
                href="#"
                className="text-[#1A1714] text-sm hover:text-[#8B5E3C] transition-colors duration-300"
              >
                Reuel Agyapong
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
