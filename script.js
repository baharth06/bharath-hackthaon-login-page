const tabBtns = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".form");
const indicator = document.querySelector(".tab-indicator");

function switchForm(targetId) {
  forms.forEach(f => f.classList.remove("active"));
  document.getElementById(targetId).classList.add("active");

  tabBtns.forEach(btn => btn.classList.remove("active"));
  const activeBtn = [...tabBtns].find(b => b.dataset.target === targetId);
  activeBtn.classList.add("active");

  // Move indicator
  if (targetId === "registerForm") {
    indicator.style.left = "calc(50% + 5px)";
  } else {
    indicator.style.left = "10px";
  }
}

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    switchForm(btn.dataset.target);
  });
});

// Switch link inside forms
document.querySelectorAll(".switch-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    switchForm(link.dataset.switch);
  });
});

// Show password checkbox (Login)
const showLoginPass = document.getElementById("showLoginPass");
showLoginPass.addEventListener("change", () => {
  document.getElementById("loginPassword").type = showLoginPass.checked ? "text" : "password";
});

// Show password checkbox (Register)
const showRegPass = document.getElementById("showRegPass");
showRegPass.addEventListener("change", () => {
  const type = showRegPass.checked ? "text" : "password";
  document.getElementById("regPassword").type = type;
  document.getElementById("regConfirm").type = type;
});

// Eye Buttons
document.querySelectorAll(".eye-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.eye);
    input.type = input.type === "password" ? "text" : "password";
  });
});

// Simple validation + shake
function shakeCard() {
  const card = document.querySelector(".auth-card");
  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 400);
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("loginName").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();

  if (!name || !pass) {
    shakeCard();
    return;
  }

  alert("✅ Login Success (UI demo)");
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const pass = document.getElementById("regPassword").value.trim();
  const confirm = document.getElementById("regConfirm").value.trim();

  if (!name || !email || !phone || !pass || !confirm) {
    shakeCard();
    return;
  }

  if (pass !== confirm) {
    shakeCard();
    alert("❌ Passwords do not match");
    return;
  }

  alert("✅ Register Success (UI demo)");
});
