
var monitor = document.querySelector('#monitor');
var btns = document.querySelectorAll('.btn');

// for getting value of buttons, Here we use for loop
for (item of btns) {
    item.addEventListener('click', (e) => {
        btntext = e.target.value;
        monitor.value = monitor.value + btntext;
    });
}


function deg() {
    monitor.value = (monitor.value * Math.PI / 180).toFixed(2);
}
function fe() {
    let value = Number(monitor.value).toExponential();
    monitor.value = value;
}


// Code for memory operations
var mem = 0;
function savemem() {
    mem = monitor.value;
}
function rdmem() {
    monitor.value = mem;
}
function submem() {
    mem = mem - eval(monitor.value);
}
function addmem() {
    mem = mem + eval(monitor.value);
}
function clrmem() {
    mem = '';
}


/* Code for Trignometry starts here*/
function trigno() {
    let x = document.getElementById('trignometry').value;
    if (x == 'sin') {
        sin();
    } else if (x == 'cos') {
        cos();
    } else if (x == 'tan') {
        tan();
    }
}
function sin() {
    monitor.value = Math.sin(monitor.value * Math.PI / 180).toFixed(2);
}

function cos() {
    monitor.value = Math.cos(monitor.value * Math.PI / 180).toFixed(2);
}

function tan() {
    monitor.value = Math.tan(monitor.value * Math.PI / 180).toFixed(2);
}
/*Code for trignometry ends here */


/* Code for functions starts here*/
function myfunction() {
    let value = document.getElementById('functions').value;
    if (value == 'abs') {
        myabs();
    } else if (value == 'floor') {
        myfloor();
    } else if (value == 'asin') {
        myasin();
    } else if (value == 'acos') {
        myacos();
    }
}
function myabs() {
    monitor.value = Math.abs(monitor.value);
}
function myfloor() {
    monitor.value = Math.floor(monitor.value);
}
function myasin() {
    monitor.value = Math.asin(monitor.value).toFixed(2);
}
function myacos() {
    monitor.value = Math.acos(monitor.value).toFixed(2);
}
/* Code for functions ends here*/

function pow() {
    monitor.value = Math.pow(monitor.value, 2);
}

function sqrt() {
    monitor.value = Math.sqrt(monitor.value, 2);
}

function ln() {
    monitor.value = Math.log(monitor.value);
}

function log() {
    monitor.value = Math.log10(monitor.value);
}

function pi() {
    monitor.value = 3.14159265359;
}

function e() {
    monitor.value = 2.71828182846;
}

function factorial() {
    var i, num, fact;
    fact = 1;
    num = monitor.value;
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }

    i = i - 1;

    monitor.value = fact;
}

function backspace() {
    monitor.value = monitor.value.substr(0, monitor.value.length - 1);
}

function exp() {
    monitor.value = Math.exp(monitor.value);
}

function onebyx() {
    monitor.value = 1 / monitor.value;
}

function absolute() {
    monitor.value = Math.abs(monitor.value);
}

// Here tenx() means 10 raised to power x.
function tenx() {
    monitor.value = Math.pow(10, monitor.value);
}

//power() function calculates x raised to y.
function power() {
    btntext = '**'
}

function plusminus() {
    monitor.value = monitor.value * -1;
}