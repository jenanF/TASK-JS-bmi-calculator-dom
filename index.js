function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height / 100;
  let BMI = weight / (height * height);

  if (BMI < 18.5) {
    alert(`your BMI is ${BMI}, Underweight!`)
  }
  else if (BMI > 18.5 && BMI < 24.9) {
    alert(`your BMI is ${BMI}, Healthy Weight`)
  }
  else if (BMI > 25 && BMI < 29.9) {
    alert(`your BMI is ${BMI}, Overweight!`)
  } else {
    alert(`your BMI is ${BMI}, Obesity!`)
  }

  if (age > 18 && age < 25 && BMI > 18 && BMI < 25 || age > 24 && age < 35 && BMI > 19 && BMI < 26 || age > 34 && age < 45 && BMI > 20 && BMI < 27 || age > 44 && age < 55 && BMI > 21 && BMI < 28 || age > 54 && age < 65 && BMI > 22 && BMI < 29 || age > 64 && BMI > 23 && BMI < 30) {
    alert("healthy");
  }
  else {
    alert("not healthy")
  }
}
