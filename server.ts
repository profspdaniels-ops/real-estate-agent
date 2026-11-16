import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  app.use(express.json());

  // Gemini AI Setup
  const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  const SYSTEM_INSTRUCTION = `You are the AI Assistant for GEMKOL FZE, a diversified business group.
Your goal is to assist customers with information about the group and its subsidiaries:
1. NITA FOAM CHEMICAL COMPANY (Mattresses, foam products)
2. GEMKOL RESOURCES LTD (Minerals, gold, Golden Bull mobility products)
3. JERISVERICH AGRO ALLIED RESOURCES (Agro-allied, food commodities)
4. GEMKOL RESOURCES INVESTMENTS AND PROPERTIES LTD (Real estate, Victory Garden City Kano)

GCEO: Dr. Uche Godwin Jerome. He is a visionary leader with over 30 years of experience.

Key Contact Info:
WhatsApp/Phone: 08036091778 (+2348036091778)
Email: gemkolfze@gmail.com
Office: 45 Aviation Quarters, Kano, Nigeria.

Instructions:
- Be professional, helpful, and concise.
- Answer questions accurately based on company information.
- If a customer wants to book a consultation or make a significant enquiry, refer them to the official WhatsApp: https://wa.me/2348036091778.
- For product enquiries, provide specific details if asked, then refer to WhatsApp for pricing and orders.
- Do not invent statistics or non-existent services.`;

  app.post('/api/ai/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const model = 'gemini-3.8-flash';
      const chat = genAI.chats.create({
        model,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history || [],
      });

      const result = await chat.sendMessage(message);
      res.json({ text: result.text });
    } catch (error) {
      console.error('AI Error:', error);
      res.status(500).json({ error: 'Failed to generate response' });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer();
