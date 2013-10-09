window.onload=init;

function init()
{
	var feedUrl;
	var authorId = document.getElementById("authorId").innerHTML;
	var contactLink = document.getElementById("contactLink");
	
	//if contactLink exist means show authers photo. else show contacts photo
	if(contactLink)
	{
		feedUrl="http://api.flickr.com/services/feeds/photos_public.gne?id="+authorId+"&format=json&jsoncallback=?";
	}
	else
	{
		feedUrl="http://api.flickr.com/services/feeds/photos_friends.gne?user_id="+authorId+"&display_all=1&format=json&jsoncallback=?";
	}
	
	$.getJSON(feedUrl,processJsonForAuthor);
}
function processJsonForAuthor(data)
{
	var heading = document.getElementById("Header");
	heading.innerHTML=data.title;
	var imageHolder = document.getElementById("image_holder");
	
	//condition when do not receive any images
	if(data.items.length==0)
	{
		var errNode = document.createElement("p");
		errNode.innerHTML = "This author does not have any contacts or all contacts do not have public images."
		imageHolder.appendChild(errNode);
		return ;
	}
	//get images from json object and append them in DOM
	for(var i=0;i<data.items.length;i++)
	{
		var item = data.items[i];
		var aTag = document.createElement("a");
		var divTag = document.createElement("div");
		var imgTag = document.createElement("img");
		
		aTag.setAttribute("href",item.link);
		aTag.setAttribute("target","_blank");
		divTag.setAttribute("class","image_author_cont");
		imgTag.setAttribute("class","image");
		imgTag.setAttribute("src",item.media.m.replace("_m","_z"));
		
		aTag.appendChild(imgTag);
		divTag.appendChild(aTag);
		
		imageHolder.appendChild(divTag);
	}
}