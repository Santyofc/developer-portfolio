import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ArrowRight, Sun, Moon, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/core/ThemeContext";
import { useLanguage } from "@/core/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "nav.home" },
  { href: "/work", label: "nav.work" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, t } = useLanguage();

  const handleLanguageToggle = () => {
    const newLang = language === "en" ? "es" : "en";
    const pathParts = location.pathname.split('/');
    pathParts[1] = newLang;
    navigate(pathParts.join('/'));
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="zs-glass px-6 h-16 rounded-2xl flex items-center justify-between border-zs-border-subtle/50">
        {/* Logo */}
        <Link 
          to="/" 
          className="group flex items-center gap-2 font-heading font-bold text-zs-text-primary transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-zs-accent-primary/10 border border-zs-accent-primary/20 flex items-center justify-center group-hover:bg-zs-accent-primary group-hover:text-zs-bg-primary transition-all">
            <span className="text-xs">SD</span>
          </div>
          <span className="hidden sm:inline-block tracking-tighter">SANTIAGO_DELGADO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zs-bg-primary/40 backdrop-blur-sm p-1.5 rounded-full border border-zs-border-subtle/50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={`/${language}${item.href === "/" ? "" : item.href}`}
              className={cn(
                "px-5 py-2 rounded-full font-sans text-sm font-medium transition-all",
                location.pathname === `/${language}${item.href === "/" ? "" : item.href}`
                  ? "bg-zs-accent-primary text-zs-bg-primary glow-green"
                  : "text-zs-text-secondary hover:text-zs-text-primary hover:bg-zs-bg-tertiary/50"
              )}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        {/* Tech Indicator & Theme Toggle (Desktop only) */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLanguageToggle}
            className="rounded-full w-10 h-10 border border-zs-border-subtle bg-zs-bg-primary/50 text-zs-text-secondary hover:text-zs-accent-primary transition-all font-mono text-[10px]"
          >
            {language.toUpperCase()}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 border border-zs-border-subtle bg-zs-bg-primary/50 text-zs-text-secondary hover:text-zs-accent-primary transition-all"
          >
            {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>

          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-zs-border-subtle bg-zs-bg-primary/50 text-[10px] font-mono text-zs-accent-primary uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-zs-accent-primary animate-pulse" />
            {theme === "dark" ? t("system.status.dark") : t("system.status.light")}
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-zs-text-primary">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 bg-zs-bg-secondary border-zs-border-subtle p-8">
            <div className="flex flex-col gap-10 mt-12">
              <div className="space-y-4">
                <div className="font-mono text-[10px] text-zs-text-muted uppercase tracking-[0.2em]">
                  [ ROOT_DRIVE ]
                </div>
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        to={`/${language}${item.href === "/" ? "" : item.href}`}
                        className={cn(
                          "px-6 py-4 rounded-xl font-heading text-2xl font-bold transition-all flex items-center justify-between group",
                          location.pathname === item.href
                            ? "bg-zs-accent-primary/10 text-zs-accent-primary border border-zs-accent-primary/20"
                            : "text-zs-text-secondary hover:text-zs-text-primary hover:bg-zs-bg-tertiary"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.label)}
                        <ArrowRight className={cn(
                          "h-5 w-5 opacity-0 group-hover:opacity-100 transition-all",
                          location.pathname === item.href && "opacity-100"
                        )} />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-zs-border-subtle">
                <div className="text-[10px] font-mono text-zs-text-muted uppercase leading-relaxed">
                  © 2024 ZONA_SUR_TECH<br />
                  COSTA_RICA_DEPT_SYS
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
