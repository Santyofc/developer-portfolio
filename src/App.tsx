import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MotionProvider } from "@/lib/MotionProvider";
import { VisualEditorProvider } from "@/core/VisualEditorContext";
import { ThemeProvider } from "@/core/ThemeContext";
import { LanguageProvider, useLanguage } from "@/core/LanguageContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Styleguide from "./pages/Styleguide";
import Contact from "./pages/Contact";
import Knowledge from "./pages/Knowledge";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const LangSync = () => {
  const { lang } = useParams();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (lang === "en" || lang === "es") {
      setLanguage(lang);
    }
  }, [lang, setLanguage]);

  return <Outlet />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <VisualEditorProvider>
              <MotionProvider>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Navigate to="/es" replace />} />
                  
                  <Route path="/:lang" element={<LangSync />}>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="knowledge" element={<Knowledge />} />
                    <Route path="work/:id" element={<ProjectDetail />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cv" element={<CV />} />
                  </Route>

                  <Route path="/styleguide" element={<Styleguide />} />
                  <Route path="*" element={<Navigate to="/es" replace />} />
                </Routes>
                <Toaster />
                <Sonner />
              </MotionProvider>
            </VisualEditorProvider>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
