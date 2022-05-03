
let a = document.getElementById('display');
let b = document.getElementById('add');
let c = document.getElementById('sub');
let d = document.getElementById('mul');
let e = document.getElementById('div');
let z
function add(){
let x = parseInt (prompt("Enter your first number"));
let y = parseInt (prompt("Enter your second number"));
z = x+y;
a.innerHTML = z;
}

function sub(){
let x = prompt("Enter your first number");
let y = prompt("Enter your second number");
z = x-y;
a.innerHTML = z;
}

function mul(){
let x = prompt("Enter your first number");
let y = prompt("Enter your second number");
z = x*y;
a.innerHTML = z;
}

function div(){
let x = prompt("Enter your first number");
let y = prompt("Enter your second number");
z = x/y;
a.innerHTML = z;
}

function clears(){

if (confirm('Are you sure you want to Clear the data?')) {
  // Save it!
  a.innerHTML = 0;
} else {
  // Do nothing!
  alert('Data was not clear.');
}

}