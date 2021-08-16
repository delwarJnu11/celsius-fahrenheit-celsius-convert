function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
};
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}
document.getElementById('celsius').addEventListener('keyup', function () {
    const celsius = document.getElementById('celsius');
    const celsiusValue = parseFloat(celsius.value);
    const fahrenheit = celsiusToFahrenheit(celsiusValue);
    document.getElementById('fahrenheit').value = fahrenheit;
});
document.getElementById('fahrenheit').addEventListener('keyup', function () {
    const fahrenheit = document.getElementById('fahrenheit');
    const fahrenheitValue = parseFloat(fahrenheit.value);
    const celsius = fahrenheitToCelsius(fahrenheitValue);
    document.getElementById('celsius').value = celsius;
})