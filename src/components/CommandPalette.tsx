import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { 
  Home, 
  Terminal, 
  Briefcase, 
  User, 
  Download, 
  Search, 
  BookOpen, 
  MessageSquare,
  Zap,
  Edit,
  Eye,
  Save,
  Languages
} from "lucide-react";
import { useVisualEditor } from "@/core/VisualEditorContext";
import { useLanguage } from "@/core/LanguageContext";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isEditMode, toggleEditMode } = useVisualEditor();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder={t('cmd.placeholder')}
        className="font-mono text-zs-accent-primary"
      />
      <CommandList className="font-mono text-[13px] bg-zs-bg-secondary border-t border-zs-border-subtle">
        <CommandEmpty className="py-6 text-center text-zs-text-muted">
          No system records found.
        </CommandEmpty>
        
        <CommandGroup heading={t('cmd.nav')}>
          <CommandItem onSelect={() => runCommand(() => navigate(`/${language}`))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Go to Home</span>
            <CommandShortcut className="text-[10px] text-zs-text-muted">/HOME</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate(`/${language}/about`))}>
            <User className="mr-2 h-4 w-4" />
            <span>Who is Santiago?</span>
            <CommandShortcut className="text-[10px] text-zs-text-muted">/ABOUT</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate(`/${language}/work`))}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Industrial Records (Projects)</span>
            <CommandShortcut className="text-[10px] text-zs-text-muted">/WORK</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate(`/${language}/knowledge`))}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Knowledge Base</span>
            <CommandShortcut className="text-[10px] text-zs-text-muted">/LEARN</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate(`/${language}/contact`))}>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Open Channel (Contact)</span>
            <CommandShortcut className="text-[10px] text-zs-text-muted">/CONTACT</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator className="bg-zs-border-subtle" />

        <CommandGroup heading={t('cmd.actions')}>
          <CommandItem onSelect={() => runCommand(() => {
            const newLang = language === "en" ? "es" : "en";
            const pathParts = window.location.pathname.split('/');
            pathParts[1] = newLang;
            navigate(pathParts.join('/'));
          })}>
            <Languages className="mr-2 h-4 w-4" />
            <span>{t('cmd.lang.toggle')}</span>
            <CommandShortcut className="text-[10px] text-zs-accent-primary opacity-50">.LANG</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => toggleEditMode())}>
            {isEditMode ? <Eye className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
            <span>{isEditMode ? t('cmd.edit.disable') : t('cmd.edit.enable')}</span>
            <CommandShortcut className="text-[10px] text-zs-accent-primary opacity-50">.EDIT</CommandShortcut>
          </CommandItem>
          {isEditMode && (
            <CommandItem onSelect={() => runCommand(() => {
              console.log("[SYSTEM]: EXPORTING_DATA_CHANGES...");
              const editables = document.querySelectorAll('[contenteditable="true"]');
              const data = Array.from(editables).map(el => ({
                tag: el.tagName,
                content: (el as HTMLElement).innerText
              }));
              console.table(data);
              alert(language === "en" ? "Changes logged to console!" : "¡Cambios guardados en consola!");
            })}>
              <Save className="mr-2 h-4 w-4" />
              <span>{t('cmd.save')}</span>
              <CommandShortcut className="text-[10px] text-zs-accent-primary opacity-50">.SAVE</CommandShortcut>
            </CommandItem>
          )}
          <CommandItem onSelect={() => runCommand(() => navigate(`/${language}/cv`))}>
            <Download className="mr-2 h-4 w-4" />
            <span>View CV_DATA (Print to PDF)</span>
            <CommandShortcut className="text-[10px] text-zs-accent-primary opacity-50">/CV</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => {
             const stack = document.getElementById('stack');
             stack?.scrollIntoView({ behavior: 'smooth' });
          })}>
            <Zap className="mr-2 h-4 w-4" />
            <span>View ENGINE_SPECS (Tech Stack)</span>
            <CommandShortcut className="text-[10px] text-zs-text-muted">.TECH</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator className="bg-zs-border-subtle" />

        <CommandGroup heading="Quick Access">
          <CommandItem onSelect={() => window.open("https://dev.zonasurtech.online", "_blank")}>
            <Terminal className="mr-2 h-4 w-4" />
            <span>Zona Sur Tech (Official Site)</span>
          </CommandItem>
          <CommandItem onSelect={() => window.open("https://www.linkedin.com/in/santi-delgados/", "_blank")}>
            <Search className="mr-2 h-4 w-4" />
            <span>LinkedIn Profile</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      
      <div className="flex items-center justify-between p-3 border-t border-zs-border-subtle bg-zs-bg-primary/50 text-[10px] font-mono text-zs-text-muted uppercase tracking-widest">
        <span>[ SYSTEM_READY ] {isEditMode && <span className="text-zs-accent-primary ml-2">// EDIT_MODE_ACTIVE</span>}</span>
        <div className="flex gap-4">
          <span>↑↓ Navigate</span>
          <span>↵ Enter</span>
          <span>ESC Close</span>
        </div>
      </div>
    </CommandDialog>
  );
}
