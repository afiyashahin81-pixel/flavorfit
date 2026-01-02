// ✅ Protect index.html (must be logged in)
const userEmail = localStorage.getItem("userEmail");

if (!userEmail) {
  window.location.href = "login.html";
}

// ✅ Show email if element exists
const emailSpan = document.getElementById("userEmailText");
if (emailSpan) {
  emailSpan.textContent = userEmail;
}

// ✅ Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
  });
}
