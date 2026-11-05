"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_js_1 = require("./Utils.js");
const form = (0, Utils_js_1.getRequired)("form");
const nameInput = (0, Utils_js_1.getRequired)("#name", form);
const emailInput = (0, Utils_js_1.getRequired)("#email", form);
const status = (0, Utils_js_1.getRequired)("#status");
function showError(input, message) {
    const error = document.createElement("span");
    error.className = "error";
    error.setAttribute("role", "alert");
    error.textContent = message;
    input.setAttribute("aria-invalid", "true");
    input.after(error);
}
function clearErrors() {
    form.querySelectorAll(".error").forEach((el) => el.remove());
    form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let valid = true;
    if (name === "") {
        showError(nameInput, "Please enter your name.");
        valid = false;
    }
    if (!email.includes("@")) {
        showError(emailInput, "Please enter a valid email address.");
        valid = false;
    }
    if (valid) {
        status.textContent =
            `Thanks, ${name}! Your feedback was received.`;
        form.reset();
    }
});
//# sourceMappingURL=feedback.js.map