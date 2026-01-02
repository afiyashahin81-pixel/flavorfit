const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, "users.json");
console.log("USERS_FILE path:", USERS_FILE);

// ---------- Helpers ----------
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function loadUsers() {
  try {
    if (!fs.existsSync(USERS_FILE)) return [];
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("loadUsers error:", err);
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// ---------- Routes ----------
app.get("/", (req, res) => {
  res.send("FlavourFit Backend Running ✅");
});

// ✅ Signup
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "All fields are required" });
    if (!isValidEmail(email)) return res.status(400).json({ message: "Invalid email address" });
    if (String(password).length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const users = loadUsers();
    const exists = users.find(u => u.email.toLowerCase() === String(email).toLowerCase());
    if (exists) return res.status(409).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(String(password), 10);

    users.push({ email: String(email), password: hashedPassword });
    saveUsers(users);

    return res.status(201).json({ message: "Signup successful", email });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "All fields are required" });

    const users = loadUsers();
    const user = users.find(u => u.email.toLowerCase() === String(email).toLowerCase());
    if (!user) return res.status(401).json({ message: "Invalid email or password" });

    const ok = await bcrypt.compare(String(password), user.password);
    if (!ok) return res.status(401).json({ message: "Invalid email or password" });

    return res.json({ message: "Login successful", email: user.email });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ---------- Start ----------
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
