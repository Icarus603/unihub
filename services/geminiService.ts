
import { GoogleGenAI, GenerateContentResponse, GroundingMetadata } from "@google/genai";
import { GEMINI_MODEL_TEXT } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("Gemini API key is missing. Please set the process.env.API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "MISSING_API_KEY" });

interface GeminiSearchResult {
  text: string;
  groundingMetadata?: GroundingMetadata;
}

export const generateTextWithGemini = async (prompt: string, useGoogleSearch: boolean = false): Promise<GeminiSearchResult> => {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }
  try {
    const config: any = {}; // Use 'any' for config initially to allow conditional properties
    if (useGoogleSearch) {
      config.tools = [{ googleSearch: {} }];
      // Do not set responseMimeType to application/json when using googleSearch
    } else {
      // For general queries not needing search, we could ask for JSON if we had a structure
      // config.responseMimeType = "application/json"; // Example if JSON output was desired and structured
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: prompt,
      config: Object.keys(config).length > 0 ? config : undefined,
    });

    const text = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    
    return { text, groundingMetadata };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API error: ${error.message}`);
    }
    throw new Error("An unknown error occurred with the Gemini API.");
  }
};

// Example of how to parse JSON if responseMimeType was "application/json"
// This is not directly used with googleSearch, but kept for reference
export const parseJsonFromGeminiResponse = <T,>(responseText: string): T | null => {
  let jsonStr = responseText.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s; // Matches ```json ... ``` or ``` ... ```
  const match = jsonStr.match(fenceRegex);
  if (match && match[2]) {
    jsonStr = match[2].trim(); 
  }
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response from Gemini:", e, "Original text:", responseText);
    return null;
  }
};
    