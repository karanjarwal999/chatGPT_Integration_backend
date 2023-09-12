const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse(prompt) {
  const params = {
    prompt: prompt,
    maxTokens: 100,
  };
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });
    return chatCompletion.choices[0].message
  } catch (error) {
    console.error('Error from OpenAI:', error);
  }
}

module.exports = generateResponse;