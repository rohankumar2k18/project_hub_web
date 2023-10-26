let goHomeBtn = document.querySelector(".button-home");

// Digital Clock

let hours = document.getElementById("hrs")
let mins = document.getElementById("min")
let secs = document.getElementById("sec")

setInterval(getCurrentTime, 100)



function getCurrentTime() {
  let date = new Date();
  date.toLocaleDateString("IN");

  let timeZone = "A.M";
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  hours.innerHTML = (h<10?"0":"") + h
  mins.innerHTML = (m<10?"0":"") + m
  secs.innerHTML = (s<10?"0":"") + s

//   if (hours > 12) {
//     hours = hours - 12;
//     timeZone = "P.M";
//   } else if (hours == 12) {
//     timeZone = "P.M";
//   }

//   let time = `${hours} : ${mins}: ${secs} ${timeZone}`;
//   timeInput.textContent = time
}

// Color Changer Code:

let colorButtons = document.querySelectorAll(".color-button");
let background = document.querySelector(".color-hero");

colorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let computedStyle = window.getComputedStyle(button);
    let color = computedStyle.background;
    background.style.background = color;
    goHomeBtn.style.background = color;
  });
});

// BMI Generator Code:

const height = document.getElementById("height");
const weight = document.getElementById("weight");

const bmiDecimal = document.getElementById("bmi-output-decimal");
const bmiword = document.getElementById("bmi-output-words");

const bmiCalcBtn = document.querySelector(".bmi-calc");

bmiCalcBtn.addEventListener("click", () => {
  if (isNaN(height.valueAsNumber) || isNaN(weight.valueAsNumber)) {
    window.alert("Please Enter both height and weight.");
  } else {
    let h = height.valueAsNumber;
    let w = weight.valueAsNumber;

    let resultbmi = (w / Math.pow(h / 100, 2)).toFixed(2);
    bmiDecimal.textContent = resultbmi;

    switch (true) {
      case resultbmi < 18.5:
        bmiword.textContent = "UnderWeight";
        bmiword.style.color = "blue";
        break;
      case resultbmi >= 18.5 && resultbmi <= 24.9:
        bmiword.textContent = "Healthy";
        bmiword.style.color = "darkgreen";
        break;
      case resultbmi > 24.6 && resultbmi <= 29.9:
        bmiword.textContent = "OverWeight";
        bmiword.style.color = "pink";
        break;
      case resultbmi > 29.9:
        bmiword.textContent = "Obese";
        bmiword.style.color = "red";
        break;

      default:
        break;
    }
  }
});


