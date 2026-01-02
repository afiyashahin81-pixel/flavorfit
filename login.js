function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    fetch("https://favourfit-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json().then(data => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (!ok) {
          alert("❌ " + (data.message || "Login failed"));
          return;
        }

        // Save login
        localStorage.setItem("userEmail", data.email || email);

        alert("✅ " + (data.message || "Login successful"));
        window.location.href = "home.html";
      })
      .catch(() => alert("❌ Server error"));
  });
});
