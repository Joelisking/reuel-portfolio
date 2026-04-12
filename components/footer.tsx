export function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-6 border-t border-[#E0D8CE]">
      <div className="max-w-350 mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-[#7A7168]">
          &copy; {new Date().getFullYear()} Reuel Agyapong
        </span>
        <span className="text-xs text-[#C4B8A8]">
          All rights reserved
        </span>
      </div>
    </footer>
  );
}
