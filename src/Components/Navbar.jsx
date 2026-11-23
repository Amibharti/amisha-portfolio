import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // keep the mobile theme button in sync with the desktop toggle
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const toggleMobileTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary">
          {profile.name.split(" ")[0]}
          <span className="text-foreground"> Portfolio</span>
        </a>

        <div className="hidden md:flex space-x-8 mr-12">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
              {l.name}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-2 z-50">
          <button onClick={toggleMobileTheme} aria-label="Toggle theme" className="p-2">
            {dark ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-blue-900" />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} className="p-2 text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
