const toggleTheme = document.getElementById("toggleTheme");
const trangThai = document.getElementById("trangThai");
toggleTheme.addEventListener("change", function () {
    document.body.classList.toggle("toi", toggleTheme.checked);
    if (toggleTheme.checked) {
        trangThai.textContent =
            "Đây là giao diện ở chế độ TỐI (đang bật).";
    } else {
        trangThai.textContent =
            "Đây là giao diện ở chế độ SÁNG (đang bật).";
    }
});