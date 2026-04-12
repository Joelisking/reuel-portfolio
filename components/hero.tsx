export function Hero() {
  return (
    <section className="md:min-h-dvh flex flex-col justify-start md:justify-center px-6 md:px-16 lg:px-24 pt-28 md:pt-18 pb-6 md:pb-0">
      <div className="max-w-350 w-full mx-auto">
        <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] text-[#1A1714] animate-fade-up">
          Crafting
        </h1>
        <h1 className="font-display-italic text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] text-[#1A1714] animate-fade-up delay-200 mt-1">
          Spaces
        </h1>

        <div className="h-px bg-[#1A1714] mt-6 md:mt-10 mb-3 md:mb-5 w-16 md:w-25 animate-draw-line delay-500" />

        <p className="label animate-fade-in delay-600">
          Interior Design & Spatial Planning
        </p>

        <p className="mt-3 md:mt-5 max-w-105 text-[0.875rem] md:text-[0.9375rem] leading-[1.6] md:leading-[1.7] text-[#7A7168] animate-fade-in delay-700">
          Designing spaces that balance beauty and function — where
          every material, proportion, and detail serves a purpose.
        </p>
      </div>

      {/* Scroll hint — desktop only */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="label text-[0.5625rem]">Scroll</span>
        <div className="w-px h-8 bg-[#C4B8A8] animate-scroll-hint" />
      </div>
    </section>
  );
}
