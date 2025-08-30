import { Data } from "@measured/puck";
import fs from "fs";

export const createPage = (path: string, pageData: Data) => {
  // Read existing database
  const databasePath = "database.json";
  let allData: Record<string, Data> = {};
  
  if (fs.existsSync(databasePath)) {
    allData = JSON.parse(fs.readFileSync(databasePath, "utf-8"));
  }
  
  // Add new page
  allData[path] = pageData;
  
  // Write back to database
  fs.writeFileSync(databasePath, JSON.stringify(allData, null, 2));
  
  console.log(`Page created at: ${path}`);
};

// Example usage:
export const createAboutPage = () => {
  const aboutPageData: Data = {
    root: {
      props: {
        title: "About Us"
      }
    },
    content: [
      {
        type: "Background",
        props: {
          type: "galaxy",
          mouseRepulsion: true,
          mouseInteraction: true,
          density: 1.5,
          glowIntensity: 0.5,
          saturation: 0.8,
          hueShift: 240,
          id: "Background-about"
        }
      }
    ],
    zones: {
      "Background-about:background-content": [
        {
          type: "Heading",
          props: {
            title: "About Our Company",
            level: "h1",
            fontSize: 48,
            fontWeight: "700",
            color: "#ffffff",
            textAlign: "center",
            id: "Heading-about-title"
          }
        }
      ]
    }
  };
  
  createPage("/about", aboutPageData);
};
