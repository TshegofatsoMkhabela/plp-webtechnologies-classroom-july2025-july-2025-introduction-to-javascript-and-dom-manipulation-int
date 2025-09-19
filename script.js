// 🚀 JavaScript Fundamentals Assignment
// ==========================

// 🎯 Part 1: Basics
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    const msg = "Please enter your name.";
    greetOutput.textContent = msg;
    console.log(msg);
  } else {
    const msg = `👋 Hello, ${name}! Welcome to my page.`;
    greetOutput.textContent = msg;
    console.log(msg);
  }
});

// Part 2: Functions
function addNumbers(a, b) {
  return a + b;
}

function formatMessage(msg) {
  return `*** ${msg.toUpperCase()} ***`;
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumBtn = document.getElementById("sumBtn");
const sumOutput = document.getElementById("sumOutput");

sumBtn.addEventListener("click", () => {
  const a = Number(num1.value);
  const b = Number(num2.value);

  if (isNaN(a) || isNaN(b)) {
    const msg = "Please enter valid numbers.";
    sumOutput.textContent = msg;
    console.log(msg);
    return;
  }

  const result = addNumbers(a, b);
  const msg = formatMessage(`The sum is ${result}`);
  sumOutput.textContent = msg;
  console.log(msg);
});

// Part 3: Loops
const countdownBtn = document.getElementById("countdownBtn");
const countdownList = document.getElementById("countdownList");

countdownBtn.addEventListener("click", () => {
  countdownList.innerHTML = ""; // clear previous

  for (let i = 5; i >= 1; i--) {
    const msg = `⏳ ${i}`;
    const li = document.createElement("li");
    li.textContent = msg;
    countdownList.appendChild(li);
    console.log(msg);
  }

  const doneMsg = "🎉 Blast off!";
  const done = document.createElement("li");
  done.textContent = doneMsg;
  countdownList.appendChild(done);
  console.log(doneMsg);
});

// Part 4: DOM Manipulation
const toggleBtn = document.getElementById("toggleBtn");
const domOutput = document.getElementById("domOutput");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    const msg = "Dark mode is ON.";
    domOutput.textContent = msg;
    console.log(msg);
  } else {
    const msg = "Light mode is ON.";
    domOutput.textContent = msg;
    console.log(msg);
  }
});
