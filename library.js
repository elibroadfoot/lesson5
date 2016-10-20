var a = Number(1);
var b = Number(2);
var name = "not entered yet!";

function addNumbers() {
	alert(a + b);
}
var c = Number(3);
var d = Number(5);

function addNumbers2() {
	console.log(c + d);
}
var e = "Eli";
var f = "Broadfoot";

function addNames() {
	alert(e + " " + f);
}



function lessTen(value) {
	var input = document.getElementById("userInput").value;
    var number = parseInt(input);

	if (number < 10) {
		alert("It is less than 10!")
	} else if (number > 10) {
		console.log (number + " " + "is greater than 10")
    }
}
function setName() {
	name = document.getElementById("fullName").value;
}
function callName() {
	alert("Your name is" + " " + name);
}
function pasteConsole() {
	console.log(document.getElementById("pasteConsole").value);
}