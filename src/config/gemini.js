
const API_KEY="AIzaSyAOZ_JozmEHqzGk6WxJe8GzxE7cp0McUUM"





import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:API_KEY});

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${prompt}`,

      config: {
      systemInstruction: "You are a Bot Who behave like friend ",
    },
  });
  console.log(response.text);
  return response.text;
}

export default  runChat;