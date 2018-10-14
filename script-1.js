//js file
function Traffic(){
var dT_green = 25;
var dT_red = 134;

var f = function TimeFlow(var dT_green, var dT_red)
{
		var i=0;
		i++;
		if(dT_green=0)
		{
			dT_red=dT_red-i;
			document.getElementById("demo").innerHTML = dT_red;
		}
		else 
		{
			dT_green=dT_green-i;
			document.getElementById("demo").innerHTML = dT_green;
			
		}
		if((dT_red>0) and (dT_green>0))
		{
		var t = setTimeout(TimeFlow, 1000);
		}
		else {var t = setTimeout(Traffic, 1000);}
		
}

}


