const OpenAI = require('openai');
require('dotenv').config();


async function generateResponse(prompt,apiKey) {
  const openai = new OpenAI({
    apiKey: apiKey || process.env.OPENAI_API_KEY,
  });

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
    return error.message;
  }
}

module.exports = generateResponse;