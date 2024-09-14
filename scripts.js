let number = "";
let clearPrintvar = 0;
let numOperar1 = 0;
let numOperar2;
let numOperarFlag = 0;
let numPressed = 0;
let resultOperar = 0;
let operatorIs;
function printNumbers(num) {
  numPressed = 1;
  resultOperar = 1;
  if (clearPrintvar == 1) {
    document.getElementById("screen").innerHTML = "";
    number = "";
    clearPrintvar = 0;
  }
  if (number == 0 && num == 0) {
    document.getElementById("screen").innerHTML = "0";
    number = 0;
  } else {
    number += num;
    document.getElementById("screen").innerHTML = number;
  }
}

function clearPrint() {
  clearPrintvar = 1;
}
function operator(operator) {
  clearPrintvar = 1;
  console.log(numOperar1);
  console.log(numOperar2);

  if (numOperarFlag == 0 && numPressed == 1) {
    operatorIs = operator;
    numOperar1 = number;
    numPressed = 0;
    numOperarFlag = 1;
  } else if (numOperarFlag == 1 && numPressed == 1) {
    numOperar2 = number;
    numPressed = 0;
    numOperarFlag = 0;
  }
  console.log(numOperar1);
  console.log(numOperar2);
  if (numOperar1 && numOperar2) {
    resultOperar = 0;
    let result;
    console.log(operatorIs);

    switch (operatorIs) {
      case "sum":
        result = parseFloat(numOperar2) + parseFloat(numOperar1);
        break;
      case "substract":
        result = parseFloat(numOperar1) - parseFloat(numOperar2);
        break;
      case "multiply":
        result = parseFloat(numOperar1) * parseFloat(numOperar2);
        break;
      case "divide":
        result = parseFloat(numOperar1) / parseFloat(numOperar2);
        break;

      case "equal":
        result = parseFloat(numOperar1);
    }

    operatorIs = operator;
    numOperar1 = result;
    numOperarFlag = 1;
    numPressed = 0;
    document.getElementById("screen").innerHTML = result;
  }
}

function reset() {
  document.getElementById("screen").innerHTML = "0";
  number = "";
  clearPrintvar = 0;
  numOperar1 = "0";
  numOperar2 = "";
  numOperarFlag = 0;
  numPressed = 0;
  resultOperar = 0;
  operatorIs = "";
}

document.addEventListener("keydown", function (event) {
  // Verifica si la tecla presionada es la que deseas (por ejemplo, la tecla 'a')
  if (event.key === "1") {
    pressedNum("num1");
    document.getElementById("num1").click();
  } else if (event.key === "2") {
    pressedNum("num2");
    document.getElementById("num2").click();
  } else if (event.key === "3") {
    pressedNum("num3");
    document.getElementById("num3").click();
  } else if (event.key === "4") {
    pressedNum("num4");
    document.getElementById("num4").click();
  } else if (event.key === "5") {
    pressedNum("num5");
    document.getElementById("num5").click();
  } else if (event.key === "6") {
    pressedNum("num6");
    document.getElementById("num6").click();
  } else if (event.key === "7") {
    pressedNum("num7");
    document.getElementById("num7").click();
  } else if (event.key === "8") {
    pressedNum("num8");
    document.getElementById("num8").click();
  } else if (event.key === "9") {
    pressedNum("num9");
    document.getElementById("num9").click();
  } else if (event.key === "0") {
    pressedNum("num0");
    document.getElementById("num0").click();
  } else if (event.key === "+") {
    pressedOperator("sum");
    document.getElementById("sum").click();
  } else if (event.key === "-") {
    pressedOperator("substract");
    document.getElementById("substract").click();
  } else if (event.key === "x") {
    pressedOperator("multiply");
    document.getElementById("multiply").click();
  } else if (event.key === "*") {
    pressedOperator("multiply");
    document.getElementById("multiply").click();
  } else if (event.key === "=") {
    pressedOperator("equal");
    document.getElementById("equal").click();
  } else if (event.key === "Enter") {
    pressedOperator("equal");
    document.getElementById("equal").click();
  } else if (event.key === ".") {
    pressedNum("point");
    document.getElementById("point").click();
  } else if (event.key === "/") {
    pressedOperator("divide");
    document.getElementById("divide").click();
  } else if (event.key === "Backspace") {
    pressedFunction("ac");
    document.getElementById("ac").click();
  }
});

function pressedNum(num) {
  document.getElementById(num).style.backgroundColor = "#8e8d8d";
  setTimeout(() => {
    document.getElementById(num).style.backgroundColor = "#505050";
  }, 100);
}

function pressedOperator(num) {
  document.getElementById(num).style.backgroundColor = "#feb044";
  setTimeout(() => {
    document.getElementById(num).style.backgroundColor = "#ff9500";
  }, 100);
}
function pressedFunction(num) {
  document.getElementById(num).style.backgroundColor = " #f2f2f2";
  setTimeout(() => {
    document.getElementById(num).style.backgroundColor = "#d4d4d2";
  }, 100);
}
