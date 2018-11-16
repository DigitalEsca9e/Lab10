var yearPrompt=new Number();
yearPrompt=prompt("What is your age?");
var date= new Date();
var year=date.getFullYear();
var yob=year-yearPrompt;
document.getElementById("para").innerHTML=yob;