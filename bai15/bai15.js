let expression = "";
const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
function updateScreen() {
    expressionDisplay.textContent = expression;
}
function addValue(value) {
    if (value === "(") {
        if (expression === "") {
            expression += "(";
        } else {
            expression += "x(";
        }
    } else if (value === "%") {
        expression += "%";
    } else {
        expression += value;
    }
    updateScreen();
}
function clearAll() {
    expression = "";
    expressionDisplay.textContent = "";
    resultDisplay.textContent = "0";
}
function calculate() {
    if (expression === "") {
        return;
    }
    try {
        let formula = expression
            .replace(/x/g, "*")
            .replace(/÷/g, "/")
            .replace(/-/g, "-")
            .replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
        if (!/^[0-9+\-*/().\s]+$/.test(formula)) {
            throw new Error("Biểu thức không hợp lệ");
        }
        let result = Function(
            '"use strict"; return (' + formula + ')'
        )();
        if (!Number.isFinite(result)) {
            throw new Error("Không thể tính toán");
        }
        resultDisplay.textContent =
            Number(result.toPrecision(12)).toString();
    } catch (error) {
        resultDisplay.textContent = "Lỗi";
    }
}