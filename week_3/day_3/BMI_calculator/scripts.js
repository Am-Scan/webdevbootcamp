function bmiCalculator(weight,height) {
    let heightSquared = height * height;
    let bmi = Math.round(weight / heightSquared);
    
    if (bmi > 24.9) {
        result = `Your BMI is ${bmi}, so you are overweight.`;
        return result; 
    } else if (bmi < 18.5) {
        result =  `Your BMI is ${bmi}, so you are underweight.`;
        return result; 
    } else {
        result =  `Your BMI is ${bmi}, so you are a normal weight.`;
        return result; 
    }
}
