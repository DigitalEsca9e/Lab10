var start= new Date();
var x=start.getTime();
function stopTime()
{
	var stop=new Date();
	var y=stop.getTime();
	var d= y-x;
	var myAlert=alert("you have been on this page for: "+d+" seconds");
	console.log(myAlert);
}