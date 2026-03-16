import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/core/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zs-bg-primary font-mono">
      <div className="text-center p-8 border border-zs-border-subtle rounded-2xl bg-zs-bg-secondary">
        <h1 className="mb-4 text-6xl font-bold font-heading text-zs-accent-primary">404</h1>
        <p className="mb-8 text-xl text-zs-text-secondary">[ ERROR: RESOURCE_NOT_FOUND ]</p>
        <Link to={`/${language}`} className="text-zs-accent-primary hover:underline hover:glow-green transition-all">
          ← RETURN_TO_SYSTEM_ROOT
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
