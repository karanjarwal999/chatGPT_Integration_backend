const express = require('express');
require('dotenv').config();
var cors = require('cors')
const generateResponse = require('./generateResponse');

const app = express();

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send('chatGPT Integrated on end point /generate-response  *pass promt in body')
})

app.post('/generate-response', async (req, res) => {
    const prompt = req.body.prompt;
    const apiKey = req.body.apiKey
    const response = await generateResponse(prompt,apiKey);
    res.json({ response });
});

app.listen(3000, () => {
  console.log(`Server running`);
});
