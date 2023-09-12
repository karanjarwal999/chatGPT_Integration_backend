const express = require('express');
require('dotenv').config();
const generateResponse = require('./generateResponse');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('backend running and chatGPT Integrated')
})

app.post('/generate-response', async (req, res) => {
    const prompt = req.body.prompt;
    const response = await generateResponse(prompt);
    res.json({ response });
});

app.listen(3000, () => {
  console.log(`Server running`);
});
