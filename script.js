function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    if (min > max) {
        document.getElementById('result').textContent = "Min value should be less than Max value.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('result').textContent = `Random Number from the given range: ${randomNumber}`;
}