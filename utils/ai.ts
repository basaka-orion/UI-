import { GoogleGenAI, Type } from "@google/genai";
import { StyleItem, FusionResult } from "../types";
import { PRD_DATA } from "../constants";

// Initialize Gemini
// NOTE: process.env.API_KEY is handled by the environment as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function fuseStyles(selectedStyleIds: string[], allStyles: StyleItem[]): Promise<FusionResult> {
  const selectedItems = allStyles.filter(s => selectedStyleIds.includes(s.id));
  const parentNames = selectedItems.map(s => s.title).join(', ');
  
  // Prepare context data for the AI
  const styleContext = selectedItems.map(item => {
    const prd = PRD_DATA[item.id];
    return {
      name: item.title,
      desc: item.description,
      specs: prd ? prd.specs : {}
    };
  });

  const prompt = `
    Role: World-class UI/UX Designer & Frontend Engineer.
    Task: Create a new, unique UI design style by fusing the following parent styles: ${parentNames}.
    
    Context Input: ${JSON.stringify(styleContext)}

    Requirements:
    1. **Name**: Invent a creative, catchy name for this new hybrid style (e.g., "Glass-Morphism" + "Pixel" = "Crystal 8-Bit").
    2. **Visual Logic**: Analyze the "DNA" of parent styles (radius, shadow, texture, color) and synthesize them intelligently. Do not just copy-paste; create a true evolution.
    3. **Code**: Generate CSS and HTML to demonstrate a "Card" component in this new style. 
       - The CSS MUST be scoped to a container class named ".fusion-preview-box". 
       - Use CSS variables for colors if possible.
       - The HTML should be a simple, attractive card (e.g., a music player, a credit card, or a profile card) that best shows off the style.
    4. **PRD**: Write brief implementation specs.

    Output Schema (JSON):
    {
      "name": "string",
      "description": "string",
      "css": "string",
      "html": "string",
      "specs": {
        "radius": "string",
        "shadow": "string",
        "font": "string",
        "colors": "string"
      },
      "platform_guides": {
        "web": "string",
        "ios": "string",
        "android": "string",
        "mini": "string"
      }
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            css: { type: Type.STRING },
            html: { type: Type.STRING },
            specs: {
              type: Type.OBJECT,
              properties: {
                radius: { type: Type.STRING },
                shadow: { type: Type.STRING },
                font: { type: Type.STRING },
                colors: { type: Type.STRING },
              },
              required: ["radius", "shadow", "font", "colors"]
            },
            platform_guides: {
              type: Type.OBJECT,
              properties: {
                web: { type: Type.STRING },
                ios: { type: Type.STRING },
                android: { type: Type.STRING },
                mini: { type: Type.STRING },
              },
              required: ["web", "ios", "android", "mini"]
            }
          },
          required: ["name", "description", "css", "html", "specs", "platform_guides"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const data = JSON.parse(text);

    return {
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
      css: data.css,
      html: data.html,
      parentStyles: selectedItems.map(s => s.title),
      timestamp: Date.now(),
      prd: {
        name: data.name,
        specs: data.specs,
        web: data.platform_guides.web,
        ios: data.platform_guides.ios,
        android: data.platform_guides.android,
        mini: data.platform_guides.mini
      }
    };

  } catch (error) {
    console.error("Fusion failed:", error);
    throw error;
  }
}
