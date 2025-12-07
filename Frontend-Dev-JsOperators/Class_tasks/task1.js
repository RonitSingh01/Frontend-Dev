function divideNumbers() {
    const numeratorInput = document.getElementById('numerator').value;
    const denominatorInput = document.getElementById('denominator').value;
    const resultElement = document.getElementById('result');    

    const numerator = Number(numeratorInput);
    const denominator = Number(denominatorInput);

    if (numeratorInput.trim() === '' || denominatorInput.trim() === '') {
        resultElement.textContent = "Please enter both numbers.";
        return;
    }

    if (isNaN(numerator) || isNaN(denominator)) {
        resultElement.textContent = "Inputs must be valid numbers.";
        return;
    }

    if (denominator === 0) {
        resultElement.textContent = "Error: Division by zero is not allowed.";
        return;
    }

    resultElement.textContent = `Result: ${numerator / denominator}`;
}