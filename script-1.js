var dT_green = 25;
var dT_red = 134;

function Traffic()
{

if(dT_green != 0)
{

dT_green--;
document.getElementById("demo").innerHTML = dT_green;

}
else {
	dT_red--;
	document.getElementById("demo").innerHTML = dT_red;
}


var t = setTimeout(Traffic, 1000);
}