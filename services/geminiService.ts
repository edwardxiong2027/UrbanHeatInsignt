
import { GoogleGenAI } from "@google/genai";
import { PAPER_SUMMARY } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIAnalysis = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an expert climate scientist specialized in Urban Heat Islands. 
        You are helping a reader understand a specific research paper. 
        Research Summary: ${PAPER_SUMMARY}. 
        Use the summary to answer questions accurately. If asked about cities not in the study, clarify the study scope (NYC, Chicago, Houston, Phoenix, LA, Miami).`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my climate database right now.";
  }
};
