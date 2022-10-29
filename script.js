let input = document.getElementById("pinInput");
let numberInput = document.getElementById("valueInput");
let tryPin = document.getElementById("try");
let a = 3;

document.getElementById("pinBtn").addEventListener("click", function () {
  let random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  input.value = random;
  a = 3;
  tryPin.innerText = a + " try left";
  document.getElementById("yes").classList.add("hide");
  document.getElementById("not").classList.add("hide");
});

document.querySelector("#numberBtn").addEventListener("click", function (e) {
  let value = e.target.innerText;
  if (isNaN(value)) {
    if (value === "C") {
      numberInput.value = "";
    }
  } else {
    let firstNumber = numberInput.value;
    let secondNumber = firstNumber + value;
    numberInput.value = secondNumber;
  }
});

document.getElementById("cross").addEventListener("click", function () {
  let stringValue = Array.from(numberInput.value);
  stringValue.pop();
  console.log(stringValue);
  let arrayValue=stringValue.join("");
  numberInput.value = arrayValue;
  console.log(arrayValue);

});
document.getElementById("submit").addEventListener("click", function () {
  if (input.value == numberInput.value && input.value!= "" && numberInput.value != "" ) {
    document.getElementById("yes").classList.remove("hide");
    document.getElementById("not").classList.add("hide");
  } else if (input.value != numberInput.value) {
    document.getElementById("not").classList.remove("hide");
    document.getElementById("yes").classList.add("hide");
    a--;
    if(a<1)
    tryPin.innerText = 3 + " try left";
    else
    tryPin.innerText = a + " try left";
  }
  if (a < 1) {
    numberInput.value = "";
    input.value = "";
    a = 3;
  }
});
