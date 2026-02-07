const slider = document.getElementById("slider");
const optionBox = document.getElementById("optionBox");

const yesBtn = document.getElementById("yesDepressed");
const noBtn = document.getElementById("noDepressed");
const curiousBtn = document.getElementById("curiousBtn");

const PRIVATE_PASSWORD = "baadge item";

function nextSlide() {
  slider.classList.add("slide-next");
}

function prevSlide() {
  slider.classList.remove("slide-next");
}

curiousBtn.onclick = () => location.href = "curiousity.html";

yesBtn.onclick = () => {
  nextSlide();

  setTimeout(() => {
    optionBox.innerHTML = `
      <div class="terminal">
        <div class="terminal-text" id="terminalText"></div>
        <div class="terminal-input">
          <span>&gt;</span>
          <input type="password" id="passwordInput">
        </div>
        <button class="enter-btn" onclick="checkPassword()">EXECUTE</button>
      </div>
    `;
    typeLines([
      "Initializing secure shell...",
      "Establishing encrypted channel...",
      "Access Level: RESTRICTED",
      "Enter password:"
    ]);
  }, 300);
};

noBtn.onclick = () => {
  nextSlide();
  setTimeout(() => {
    optionBox.innerHTML = `
      <div class="deny-box">
        <h2>🚫 ACCESS DENIED</h2>
        <p>TUNNE IDI TUMKUR NADI<br>HOGO GANDU EXIT HAGU</p>
        <button class="deny-btn" onclick="location.reload()">EXIT PAGE</button>
      </div>
    `;
  }, 300);
};

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const terminal = document.getElementById("terminalText");

  terminal.innerHTML += `<div>> Verifying...</div>`;

  setTimeout(() => {
    if (input === PRIVATE_PASSWORD) {
      terminal.innerHTML += `<div class="success">> Access granted</div>`;
      setTimeout(() => location.href = "inside.html", 1200);
    } else {
      terminal.innerHTML += `<div class="error">> ACCESS DENIED</div>`;
    }
  }, 1000);
}

function typeLines(lines) {
  const terminal = document.getElementById("terminalText");
  let i = 0;

  function type() {
    if (i >= lines.length) return;
    const line = document.createElement("div");
    terminal.appendChild(line);
    let j = 0;

    const interval = setInterval(() => {
      line.textContent += lines[i][j++];
      if (j === lines[i].length) {
        clearInterval(interval);
        i++;
        setTimeout(type, 300);
      }
    }, 30);
  }
  type();
}
