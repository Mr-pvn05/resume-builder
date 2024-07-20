import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const getSummaryByAI = async (prompt) => {

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
  
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
  
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };
  
    async function run() {
      const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
      });
  
      const result = await chatSession.sendMessage(prompt);
      return result.response.text();
    }
  
    const response = await run();
    return response;
}

export default getSummaryByAI;