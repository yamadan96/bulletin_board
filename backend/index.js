const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// 掲示板のデータを格納する配列
const messages = [];

// 掲示板メッセージの取得
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// 掲示板メッセージの投稿
app.post("/api/messages", (req, res) => {
  const { username, message } = req.body;
  if (username && message) {
    const newMessage = {
      username,
      message,
      timestamp: new Date().toLocaleString(),
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
