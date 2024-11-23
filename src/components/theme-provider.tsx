import { createContext, useContext, useEffect, useState } from "react";

// Correct Theme type, allowing only "dark", "light", or "system"
type Theme = "dark" | "light" | "system";

// Fixing the defaultTheme type to allow "system" as a valid option
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;  // Now accepts "dark", "light", or "system"
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Set a valid initial theme value
const initialState: ThemeProviderState = {
  theme: "light",  // Default theme should be either "light" or "dark"
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",  // Now accepts "system" as a valid default
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    // Ensure only valid theme classes are applied
    if (theme === "light" || theme === "dark") {
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={value}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};