//your JS code here. If required.
let count=1;
let ul=document.getElementByTagName("ul")[0];
let i=0;
while(i<ul.children.length)
	{
		let node=ul.children[i];
		if(node.id==="level")
		{
			level+=1;
		}
		i++;
	}
alert("The level of the element is:"+level)