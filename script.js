//your JS code here. If required.
let count=1;
const level=document.getElementById("level");
while(false)
	{
		if(level.tagName==="HTML")break;
		level=level.parentNode();
		count++;
	}
alert("The level of the element is: "+count);