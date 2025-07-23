const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    console.log(height);
    console.log(weight);
    console.log(result);

    if (height === "" || height < 0 || isNaN(height)){
        result.innerText = `Please give valid Height : ${height}`;
        result.style.backgroundColor = "yellow"
    } else if (weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give valid Weight : ${weight}`;
        result.style.backgroundColor = "orange"
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        if (bmi >= 18.60 && bmi <= 24.90) {
            result.innerHTML = `BMI : ${bmi} - Normal Range.`;
            result.style.backgroundColor = "forestgreen"
        } else if (bmi > 24.9) {
            result.innerHTML = `BMI : ${bmi} - Over Weight!`;
            result.style.backgroundColor = "red"
        } else {
            result.innerHTML = `BMI : ${bmi} - Under Weight!`;
            result.style.backgroundColor = "red"
        }
        
    }
})