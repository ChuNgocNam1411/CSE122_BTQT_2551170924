const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const nameMessage = document.getElementById("nameMessage");
const emailMessage = document.getElementById("emailMessage");
const passwordMessage = document.getElementById("passwordMessage");
const confirmMessage = document.getElementById("confirmMessage");
const result = document.getElementById("result");
function showMessage(input, messageElement, message, valid) {
    input.classList.remove("valid", "invalid");
    messageElement.classList.remove("success", "error");
    if (valid) {
        input.classList.add("valid");
        messageElement.classList.add("success");
        messageElement.textContent = "✓ " + message;
    } else {
        input.classList.add("invalid");
        messageElement.classList.add("error");
        messageElement.textContent = "✗ " + message;
    }
}
function checkName() {
    const name = nameInput.value.trim();
    const valid = name !== "";
    showMessage(
        nameInput,
        nameMessage,
        valid ? "Hợp lệ" : "Vui lòng nhập họ và tên",
        valid
    );
    return valid;
}
function checkEmail() {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = regex.test(email);
    let message = "Hợp lệ";
    if (email === "") {
        message = "Vui lòng nhập email";
    } else if (!valid) {
        message = "Email không hợp lệ";
    }
    showMessage(emailInput, emailMessage, message, valid);

    return valid;
}
function checkPassword() {
    const password = passwordInput.value;
    const valid = password.length >= 6;
    let message = valid
        ? "Hợp lệ"
        : "Mật khẩu phải có ít nhất 6 ký tự";
    showMessage(passwordInput, passwordMessage, message, valid);
    return valid;
}
function checkConfirm() {
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    const valid =
        password.length >= 6 &&
        confirmPassword !== "" &&
        password === confirmPassword;
    let message = "Hợp lệ";
    if (confirmPassword === "") {
        message = "Vui lòng xác nhận mật khẩu";
    } else if (password !== confirmPassword) {
        message = "Mật khẩu không khớp";
    } else if (password.length < 6) {
        message = "Mật khẩu chưa hợp lệ";
    }
    showMessage(confirmInput, confirmMessage, message, valid);
    return valid;
}
nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", function () {
    checkPassword();
    if (confirmInput.value !== "") {
        checkConfirm();
    }
});
confirmInput.addEventListener("input", checkConfirm);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const valid =
        checkName() &&
        checkEmail() &&
        checkPassword() &&
        checkConfirm();
    if (valid) {
        result.textContent = "Đăng ký thành công!";
        result.className = "success";
    } else {
        result.textContent = "Vui lòng kiểm tra lại dữ liệu!";
        result.className = "error";
    }
});