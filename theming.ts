import { readFileSync } from "fs";
import { join } from "path";
import { Plugin } from "vite";

// Replaces app.css with the contents of the file specified in the
// environment variable or config file.
export const themePlugin = (): Plugin => {
  const themeFolder = process.env.VITE_THEME || "default";
  console.log(`Using theme folder: ${themeFolder}`);
  return {
    name: "theme-generator",
    enforce: "pre", // Ensure this plugin runs first
    transform(code, id) {
      if (id.endsWith("app.css")) {
        // Read the theme file and replace the contents of app.css with it
        // Needs full path to the file
        const themePath = join(
          process.cwd(),
          "themes",
          themeFolder,
          "theme.css",
        );
        const themeCode = readFileSync(themePath, "utf-8");
        // Replace the contents of app.css with the theme code

        // and add a comment at the top
        const themeComment = `/* Generated from ${themeFolder} */\n`;
        const themeCodeWithComment = themeComment + themeCode;
        // Return the theme code as the new contents of app.css
        return {
          code: themeCodeWithComment,
          map: null,
        };
      }
      return null;
    },
  };
};
