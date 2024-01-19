// input console

const inputview = document.querySelector("#input1");

// numbers

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const pi = document.querySelector("#pi");
const eulersNum = document.querySelector("#eulersnum");
const goldenRatio = document.querySelector("#golden-ratio");

// operators

const plusSign = document.querySelector("#plus");
const minusSign = document.querySelector("#minus");
const divisionSign = document.querySelector("#division");
const multiplerSign = document.querySelector("#multiply");
const power = document.querySelector("#power-function");
const leftBracket = document.querySelector("#bracket-left");
const rightBracket = document.querySelector("#bracket-right");
const percentage = document.querySelector("#percentage");
const decimalDot = document.querySelector("#decimal-dot");
const imagz = document.querySelector("#imag");
const clearScreen = document.querySelector("#clear-screen");
const erase = document.querySelector("#cross");
const evaluate = document.querySelector("#equal");

// math functions
const SquareNum = document.querySelector("#square");
const factorials = document.querySelector("#factorial");
const logbaseE = document.querySelector("#natural-log");
const reciprocal = document.querySelector("#reciprocal-num");
const logBase2 = document.querySelector("#logbase2");
const logbase10 = document.querySelector("#log-base10");
const floorFunc = document.querySelector("#greatest-int-function");
const ceilFunc = document.querySelector("#lowest-int-function");
const sineFunc = document.querySelector("#sine-function");
const cosFunc = document.querySelector("#cosine-function");
const tanFunc = document.querySelector("#tangent-function");
const sinhFunc = document.querySelector("#hyperbolic-sine");
const coshFunc = document.querySelector("#hyperbolic-cos");
const tanhFunc = document.querySelector("#hyperbolic-tan");
const modulusFunc = document.querySelector("#modulus");



const InverseFunctions = document.querySelector("#inverse");

function Factorial(num)  {
    let f = 1;
    for (i = 1; i <= num; i++) {
        f *= i;
    }

    return f;
}



 // display numbers 
one.onclick = showOne;

function showOne() {
    inputview.value += '1';
}

two.onclick = showTwo;

function showTwo() {
    inputview.value += '2';
}

three.onclick = showThree;

function showThree() {
    inputview.value += '3';
}

four.onclick = showFour;

function showFour()  {
    inputview.value += '4';
}

five.onclick = showFive;

function showFive()  {
    inputview.value += '5';
}

six.onclick = showSix;

function showSix()  {
    inputview.value += '6'
}

seven.onclick = showSeven;

function showSeven()  {
    inputview.value += '7';
}

eight.onclick = showEight;

function showEight()  {
    inputview.value += '8';
}

nine.onclick = showNine;

function showNine()   {
    inputview.value += '9';
}

zero.onclick = showZero;

function showZero()  {
    inputview.value += '0';
}

pi.onclick = showPi;

function showPi()  {
    inputview.value += '3.141592654';
}

eulersNum.onclick = showEulersNum;

function showEulersNum()  {
    inputview.value += '2.718281828';
}

goldenRatio.onclick = showGoldenRatio;

function showGoldenRatio()  {
    const goldenratio = (1 + 5**0.5) / 2;
    inputview.value += `${goldenratio}`;
}

imagz.onclick = showImag;

function showImag() {
    if (inputview.value == ' ') {
        inputview.value += '0 + 1i';
    }
    else {
        inputview.value += 'i';
    }

}

// operators 

plusSign.onclick = displayPlus;

function displayPlus()  {
    inputview.value += '+';
}

minusSign.onclick = displayMinus;

function displayMinus()  {
    inputview.value += '-';
}

percentage.onclick = displayPercent;

function displayPercent()  {
    if (inputview.value === ' ') {
        inputview.value += '0.01';
    }
    else {
        inputview.value = eval(inputview.value)/100;
    }
}

divisionSign.onclick = displayDiv;

function displayDiv()  {
    inputview.value += '/';
}

multiplerSign.onclick = diplayMultiplication;

function diplayMultiplication()  {
    inputview.value += '*';
}

power.onclick = displayPow;

function displayPow()  {
    inputview.value += '**';
}

factorials.onclick = showFact;

function showFact()  {
    if (inputview.value == ' ') {
        inputview.value = `${Factorial(0)}`;
    }
    else {
        inputview.value = `${Factorial(eval(inputview.value))}`;
    }
}

leftBracket.onclick = displayLbrack;

function displayLbrack()  {
    inputview.value += '(';
}

rightBracket.onclick = displayRbrack;

function displayRbrack()  {
    inputview.value += ')';
}

decimalDot.onclick = displayDecimal;

function displayDecimal() {
    inputview.value += '.';
}

clearScreen.onclick = Clear;

function Clear()  {
    inputview.value = ' ';
}

erase.onclick = eraseNum;

function eraseNum()  {
    inputview.value = inputview.value.toString().slice(0, -1);
}

evaluate.onclick = EvaluateVal;

function EvaluateVal() {
    inputview.value = eval(inputview.value);
}

SquareNum.onclick = square;

function square()  {
    inputview.value = eval(inputview.value)**2;
}

logbaseE.onclick = calculate_loge;

function calculate_loge()  {
    inputview.value = Math.log(eval(inputview.value));
}

reciprocal.onclick = xinverse;

function xinverse()  {
    inputview.value = 1 / eval(inputview.value);
}

logBase2.onclick = calculate_log2;

function calculate_log2()  {
    inputview.value = Math.log2(eval(inputview.value));
}

logbase10.onclick = calculate_log10;

function calculate_log10()  {
    inputview.value = Math.log10(eval(inputview.value));
}

floorFunc.onclick = floorNum;

function floorNum()  {
    inputview.value = Math.floor(eval(inputview.value));
}

ceilFunc.onclick = ceilNum;

function ceilNum()  {
    inputview.value = Math.ceil(eval(inputview.value));
}

sineFunc.onclick = calculateSine;

function calculateSine()  {
    let angleRad = eval(inputview.value) * 0.01745;
    if (inputview.value == ' ') {
        inputview.value = '0';
    }
    else {
    inputview.value = Math.sin(angleRad);
    }
}

cosFunc.onclick = calculateCos
function calculateCos() {
    let angleRad = eval(inputview.value) * 0.01745;

    if (inputview.value == ' ') {
        inputview.value = '1';
    }
    else {
        inputview.value = Math.cos(angleRad);
    }
}

tanFunc.onclick = calculateTan;

function calculateTan()  {
    let angleRad = eval(inputview.value) * 0.01745;

    if (inputview.value == ' ') {
        inputview.value = '0';
    }
    else {
        inputview.value = Math.tan(angleRad);
    }
}

coshFunc.onclick = calculateCosh;

function calculateCosh()  {
    inputview.value = Math.cosh(eval(inputview.value));
}

sinhFunc.onclick = calculateSinh;

function calculateSinh() {
    inputview.value = Math.sinh(eval(inputview.value));
}

tanhFunc.onclick = calculateTanh;

function calculateTanh()  {
    inputview.value = Math.tanh(eval(inputview.value));
}

modulusFunc.onclick = absoluteVal;

function absoluteVal()  {
    let value = eval(inputview.value);

    if (value < 0) {
        inputview.value = `${Math.sqrt((value**2))}`;
    }
    else if (value > 0) {
        inputview.value = `${Math.sqrt((value**2))}`;
    }
    else {
        inputview.value = '0';
    }
    
}

// inverse function mode;

InverseFunctions.onclick = invertFunctions;

function invertFunctions()  {

    InverseFunctions.style.backgroundColor = 'rgba(222, 13, 57, 1)';

    // inverse trig functions
    sineFunc.innerHTML= 'Sin<sup>-1</sup>()';
    cosFunc.innerHTML = 'Cos<sup>-1</sup>()';
    tanFunc.innerHTML = 'Tan<sup>-1</sup>()';

    sineFunc.onclick = ArcSin;
    cosFunc.onclick = ArcCos;
    tanFunc.onclick = ArcTan;

    // inverse-log
    logbaseE.innerHTML = 'e<sup>x</sup>';
    logBase2.innerHTML = '2<sup>x</sup>';
    logbase10.innerHTML = '10<sup>x</sup>';

    logbaseE.onclick = ExponetialE;
    logBase2.onclick = Exponetial2;
    logbase10.onclick = Exponetial10;

    // hyperbolic functions

    sinhFunc.innerHTML = 'Sinh<sup>-1</sup>()';
    coshFunc.innerHTML = 'Cosh<sup>-1</sup>()';
    tanhFunc.innerHTML = 'Tanh<sup>-1</sup>()';

    sinhFunc.onclick = ArcSinh;
    coshFunc.onclick = ArcCosh;
    tanhFunc.onclick = ArcTanh;

    // algebraic 

    SquareNum.innerHTML = '&Sqrt;n';

    SquareNum.onclick = CalculateSqrt;

}

// inverse trignometric

function ArcSin() {
    let angle = Math.asin(eval(inputview.value));
    inputview.value = angle * 57.2957795;
}

function ArcCos() {
    let angle = Math.acos(eval(inputview.value));
    inputview.value = angle * 57.2957795;
}

function ArcTan() {
    let angle = Math.atan(eval(inputview.value));
    inputview.value = angle * 57.2957795;
}

// exponetials

function ExponetialE()  {
    inputview.value = `${2.71828182**(eval(inputview.value))}`;
}

function Exponetial2()  {
    inputview.value = `${2**(eval(inputview.value))}`;
}

function Exponetial10()  {
    inputview.value = `${10**(eval(inputview.value))}`;
}

// inverse hyperbolic functions

function ArcSinh() {
    inputview.value = Math.asinh(eval(inputview.value));
}

function ArcCosh()  {
    inputview.value = Math.acosh(eval(inputview.value));
}

function ArcTanh() {
    inputview.value = Math.atanh(eval(inputview.value));
}

// algebraic

function CalculateSqrt()  {
    inputview.value = eval(inputview.value)**0.5;
}

// function 2

InverseFunctions.ondblclick = BackToNormal;

function BackToNormal()  {
    InverseFunctions.style.backgroundColor = 'rgb(80, 202, 80)';

    sineFunc.innerHTML= 'Sin()';
    cosFunc.innerHTML = 'Cos()';
    tanFunc.innerHTML = 'Tan()';

    sineFunc.onclick = calculateSine;
    cosFunc.onclick = calculateCos;
    tanFunc.onclick = calculateTan;

    sinhFunc.innerHTML = 'Sinh()';
    coshFunc.innerHTML = 'Cosh()';
    tanhFunc.innerHTML = 'Tanh()';

    sinhFunc.onclick = calculateSinh;
    coshFunc.onclick = calculateCosh;
    tanhFunc.onclick = calculateTanh;

    logbaseE.innerHTML = 'ln()';
    logBase2.innerHTML = 'log<sub>2</sub>()';
    logbase10.innerHTML = 'log<sub>10</sub>()';

    logbaseE.onclick = calculate_loge;
    logBase2.onclick = calculate_log2;
    logbase10.onclick = calculate_log10;

}