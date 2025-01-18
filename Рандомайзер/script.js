function validateMinMax() {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');

    let min = parseInt(minInput.value, 10);
    let max = parseInt(maxInput.value, 10);

    if (isNaN(min)) min = 0; // Если не число, устанавливаем 0
    if (isNaN(max)) max = 999; // Если не число, устанавливаем 999

    if (min < 0) minInput.value = 0;
    if (max > 999) maxInput.value = 999;
    if (min >= max) {
        minInput.value = max - 1; //Устанавливаем минимум на 1 меньше максимума, чтобы предотвратить ошибку.
    }


}

function generateRandomNumber() {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');

    const min = parseInt(minInput.value, 10);
    const max = parseInt(maxInput.value, 10);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Некорректный ввод. Минимум должен быть меньше максимума и быть числом.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector('.random-number h1').textContent = randomNumber;
}