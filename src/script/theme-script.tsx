import { ScriptOnce } from "@tanstack/react-router";
import { memo } from "react";
import { getStorageScript } from "../storage/storage";
import type { ThemeProviderProps } from "../types";

export const ThemeScript = memo(
  ({
    forcedTheme,
    storageKey,
    attribute,
    enableSystem,
    enableColorScheme,
    defaultTheme,
    value,
    themes,
    storage = "localStorage",
  }: Omit<ThemeProviderProps, "children"> & {
    defaultTheme: string;
  }) => {
    const script = getStorageScript(storage);
    if (!script) {
      return;
    }
    const scriptArgs = JSON.stringify([
      attribute,
      storageKey,
      defaultTheme,
      forcedTheme,
      themes,
      value,
      enableSystem,
      enableColorScheme,
    ]).slice(1, -1);
    return <ScriptOnce children={`(${script.toString()})(${scriptArgs})`} />;
  },
);
