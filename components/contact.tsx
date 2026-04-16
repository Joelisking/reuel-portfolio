import { ScrollReveal } from '@/components/scroll-reveal';

interface ContactProps {
  email?: string;
  linkedin?: string;
  linkedinUrl?: string;
}

export function Contact({
  email = 'agyapong.24@osu.edu',
  linkedin = 'Reuel Agyapong',
  linkedinUrl = 'https://www.linkedin.com/in/reuel-agyapong-526043342?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
}: ContactProps) {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-24 py-12 md:py-20 border-t border-[#E0D8CE]">
      <div className="max-w-350 mx-auto">
        <ScrollReveal>
          <span className="label block mb-6">Contact</span>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="h-px bg-[#E0D8CE] my-8 max-w-sm" />
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14">
            <div>
              <span className="label block mb-1.5">Email</span>
              <a
                href={`mailto:${email}`}
                className="text-[#1A1714] text-sm hover:text-[#8B5E3C] transition-colors duration-300">
                {email}
              </a>
            </div>
            <div>
              <span className="label block mb-1.5">LinkedIn</span>
              <a
                href={linkedinUrl}
                className="text-[#1A1714] text-sm hover:text-[#8B5E3C] transition-colors duration-300">
                {linkedin}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
