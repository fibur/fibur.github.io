// script.js
function calculateDose() {
    var drugConcentration = document.getElementById('drugConcentration').value;
    var animalWeight = document.getElementById('animalWeight').value;
    var dosePerKg = document.getElementById('dosePerKg').value;

    var totalDose = (dosePerKg * animalWeight);
    var liquidAmount = totalDose / drugConcentration;

    document.getElementById('result').innerHTML = 'Podaj ' + liquidAmount.toFixed(2) + ' ml leku.';
}
