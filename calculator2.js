/* Calculator Version 2 All Rights Reserved ,,,,   Avanteesh */


// numbers!
function get_one() {
   const output = document.getElementById("outputs");
   output.value += '1';
}

function get_two() {
    const output = document.getElementById("outputs");
    output.value += '2';
}

function get_three() {
    const output = document.getElementById("outputs");
    output.value += '3';
}

function get_four() {
    const output = document.getElementById("outputs");
    output.value += '4';
}
function get_five() {
    const output = document.getElementById("outputs");
    output.value += '5';
}
function get_six() {
    const output = document.getElementById("outputs");
    output.value += '6';
}
function get_seven() {
    const output = document.getElementById("outputs");
    oucotput.value += '7';
}
function get_eight()  {
    const output = document.getElementById("outputs");
    output.value += '8';
}
function get_nine()  {
    const output = document.getElementById("outputs");
    output.value += '9';
}
function get_zero()  {
    const output = document.getElementById("outputs");
    output.value += '0';
}

/*--------------- operator functions -------------------*/

function clear_screen()  {
    const output = document.getElementById("outputs");
    output.value = ' ';
}

function decimal_dot()  {
    const output = document.getElementById("outputs");
    output.value += '.';
}

function get_left_bracket()  {
    const output = document.getElementById("outputs");
    output.value += '(';
}
function get_right_bracket()  {
    const output = document.getElementById("outputs");
    output.value += ')';
}

function percentage(num) {
    return num/100;
}

function percent_sign()  {
    const output = document.getElementById("outputs");
    output.value = percentage(output.value);
}

function show_value()  {
    const output = document.getElementById("outputs");
    output.value = eval(output.value)
}

function eraser()  {
    const output = document.getElementById("outputs");
    output.value = output.value.toString().slice(0, -1);
}


/*  Arithmatic operators */

function plus_sign()   {
    const output = document.getElementById("outputs");
    output.value += '+';
}
function minus_sign()   {
    const output = document.getElementById("outputs");
    output.value += '-';
}
function multipler()  {
    const output = document.getElementById("outputs");
    output.value += '*';
}
function divider()  {
    const output = document.getElementById("outputs");
    output.value += '/';
}
function show_Pi()   {
    const output = document.getElementById("outputs");
    output.value += '3.14159265359';
}
/* Math Functions */
function factorial(num)  {
    if (num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
function log(num)  {
    return Math.log10(num)
}
function sqrt(n)  {
    return n**0.5;
}
/*
function euler_number()  {
    s = 0;
    for (j = 0; j <= 500; j++)  {
        s = s + j / factorial(j)
    }
    return s;
} */

function show_e()  {
    const output = document.getElementById("outputs");
    output.value += '2.7182818284';
}
function my_factorial()  {
    const output = document.getElementById("outputs");
    if (output.value == " ")  {
        output.value += '0!';
    }
    else {
        output.value = factorial(output.value);
    }
}
function power()   {
    const output = document.getElementById("outputs");
    if (output.value == ' ') {
        output.value += '0**1';    // Default
    } else {
    output.value += '**';
    }
}

function log_base_10()   {
    const output = document.getElementById("outputs");
    output.value = log(output.value);
}

function show_squareroot()  {
    const output = document.getElementById("outputs");
    if (output.value == ' ')  {
        output.value = 'Enter a Number first';
    }
    else {
        output.value = sqrt(output.value);
    }
}

