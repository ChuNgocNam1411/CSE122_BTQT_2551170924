const flower = document.getElementById("flower");
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        flower.className = "";
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        const effect = button.dataset.effect;
        flower.classList.add(effect);
        button.classList.add("active");
    });
});