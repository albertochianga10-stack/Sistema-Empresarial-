
import { GoogleGenAI } from "@google/genai";

export const getFinancialInsights = async (data: any) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const prompt = `Analise os seguintes dados financeiros de uma empresa em Angola e forneça 3 insights estratégicos curtos (máximo 2 frases cada) em Português de Angola. 
    Dados: ${JSON.stringify(data)}. 
    Foque em: saúde financeira, tendências de matrículas e gestão de projetos.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "Sem insights disponíveis no momento.";
  } catch (error) {
    console.error("Erro ao obter insights do Gemini:", error);
    return "Não foi possível carregar os insights estratégicos.";
  }
};
