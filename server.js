const express = require("express");
const cors = require("cors");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());

require('dotenv').config();

const API_KEY = process.env.GROQ_API_KEY;
app.post("/ai", async (req, res) => {

  try {

    const userInput = req.body.input;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },

        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",

          messages: [

  {
    role: "system",
    content: `
You are a professional AI skincare advisor.

Give skincare advice in this format:

🌞 Morning Routine
🌙 Night Routine
⚠️ Ingredients to Avoid
💧 Lifestyle Tips

Keep responses professional and beginner friendly.
`
  },

  {
    role: "user",
    content: `
My skin issue:
${userInput}

Please provide:
- skin analysis
- morning routine
- night routine
- ingredients to avoid
- skincare tips
`
  }

]
        })
      }
    );

    const data = await response.json();

    console.log(data);

    res.json(data);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
