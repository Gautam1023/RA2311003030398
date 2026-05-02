const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Enable CORS (very important)
app.use(cors());

// 🔥 Paste your NEW token here
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJnczEyMjVAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNjE5OSwiaWF0IjoxNzc3NzA1Mjk5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZjYwOWI0MDAtYmM4My00YmFhLWJlOTgtYjJkOWE4NjkxOWU1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ2F1dGFtIHNpa2thIiwic3ViIjoiMjIxZjdhODMtNTVkYy00YzgwLTgwYWQtNzk2MDVjN2RkMWRiIn0sImVtYWlsIjoiZ3MxMjI1QHNybWlzdC5lZHUuaW4iLCJuYW1lIjoiZ2F1dGFtIHNpa2thIiwicm9sbE5vIjoicmEyMzExMDAzMDMwMzk4IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiMjIxZjdhODMtNTVkYy00YzgwLTgwYWQtNzk2MDVjN2RkMWRiIiwiY2xpZW50U2VjcmV0IjoiTURRQ2N4akRrdU15bWFhUiJ9.bTNvAxziiX-aUTCsTpt_10yizSf_EcQKDe4B0uJMpM4";

// Route to get notifications
app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    console.log("✅ Notifications fetched successfully");
    res.json(response.data);

  } catch (err) {
    console.log("❌ ERROR FROM API:");
    console.log(err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || "Something went wrong",
    });
  }
});

// (Optional but good) Logging route for assignment
app.post("/logs", async (req, res) => {
  try {
    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.log("❌ Log Error:");
    console.log(err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || "Log failed",
    });
  }
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});