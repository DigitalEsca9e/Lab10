function total()
{
	var n1=Number(document.getElementById("number1").value);
	var n2=Number(document.getElementById("number2").value);
	var s=n1+n2;
	document.getElementById("lbl").innerHTML=s;
	document.getElementById("number1").value=n1;
	document.getElementById("number2").value=n2;
}