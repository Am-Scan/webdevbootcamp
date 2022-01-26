function myFunction() {
    var x = document.getElementById("input-form");
    let weight = x.elements[0].value;
    let height = x.elements[1].value;
    bmiCalculator(weight,height);
  }

function bmiCalculator(weight,height) {
    let heightSquared = height * height;
    let bmi = Math.round(weight / heightSquared);
    
    if (bmi > 24.9) {
        result = `Your BMI is ${bmi}, so you are overweight.`;
        document.getElementById("results").innerHTML = result;
        
    } else if (bmi < 18.5) {
        result =  `Your BMI is ${bmi}, so you are underweight.`;
        document.getElementById("results").innerHTML = result;
    } else {
        result =  `Your BMI is ${bmi}, so you are a normal weight.`;
        document.getElementById("results").innerHTML = result;
    }
}
