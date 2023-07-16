const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "";
const CHAT_ENGINE_PRIVATE_KEY = "";

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username:username, secret:username, first_name:username},
        { headers: { "Private-Key": 'YOUR_CHATENGINE_PRIVATE_KEY' } } //paste your private key within ''.
    )
    return res.status(r.status).json(r.data)
} catch (e) {
    return res.status(e.response.status).json(e.response.data)
}

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);