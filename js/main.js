window.onload=init;

function init()
{
	var feedUrl="http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?";
	$.getJSON(feedUrl,processJsonForAll);
}
function processJsonForAll(data)
{
	var heading = document.getElementById("Header");
	heading.innerHTML=data.title;
	var imageHolder = document.getElementById("image_holder");
	for(var i=0;i<data.items.length;i++)
	{
		var item = data.items[i];
		var divTag = document.createElement("div");
		var imgTag = document.createElement("img");
		var spanTag = document.createElement("p");
		var aTag = document.createElement("a");
		
		divTag.setAttribute("class","image_author_cont");
		imgTag.setAttribute("class","image");
		imgTag.setAttribute("src",item.media.m.replace("_m","_q"));
		imgTag.setAttribute("alt",item.title);
		spanTag.setAttribute("class","author");
		aTag.setAttribute("href","authorsPic.php?authorId="+item.author_id+"&linkFor=author");
		aTag.innerHTML = item.author.replace("nobody@flickr.com","");
		spanTag.appendChild(aTag);
		divTag.appendChild(imgTag);
		divTag.appendChild(spanTag);
		imageHolder.appendChild(divTag);
	}
}
