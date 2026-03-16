import React, { createContext, useContext, useState, useEffect } from "react";

interface VisualEditorContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const VisualEditorContext = createContext<VisualEditorContextType | undefined>(undefined);

export function VisualEditorProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);

  // Sync with localStorage to persist during navigation
  useEffect(() => {
    const saved = localStorage.getItem("zs_edit_mode");
    if (saved === "enabled") setIsEditMode(true);
  }, []);

  const toggleEditMode = () => {
    setIsEditMode((prev) => {
      const newState = !prev;
      localStorage.setItem("zs_edit_mode", newState ? "enabled" : "disabled");
      return newState;
    });
  };

  return (
    <VisualEditorContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </VisualEditorContext.Provider>
  );
}

export function useVisualEditor() {
  const context = useContext(VisualEditorContext);
  if (context === undefined) {
    throw new Error("useVisualEditor must be used within a VisualEditorProvider");
  }
  return context;
}
