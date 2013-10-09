<?php
	if(!isset($_GET["authorId"]))
	{
		echo"require author id";
		exit();
	}
	if(!isset($_GET["linkFor"])||($_GET["linkFor"]!="author"&&$_GET["linkFor"]!="contects"))
	{
		echo "require a correct authore type";
		exit();
	}
?>
<!Doctype html>
<html>
<head>
<title>
<?php
if($_GET["linkFor"]=="author")
	echo "Authors Recent Feeds";
else
	echo "Authors contacts Recent Feeds";
?>
</title>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="./style/style.css" />
<link rel="stylesheet" type="text/css" href="./style/specialStyle.css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="./js/authors.js"></script>
</head>
<body>
	<div class="hid">
		<span id="authorId" ><?php echo $_GET["authorId"]; ?></span>
	</div>
	
	<div class="whole_page">
		<div class="headerContainer">
			<h1 id="Header"></h1>
		</div>
		<?php
		if($_GET["linkFor"]=="author")
		{
			$link = "<a href=\"authorsPic.php?authorId=".$_GET["authorId"]."&linkFor=contects\">Author's Contacts(friends and family) Photos</a>";
			echo "<div id=\"contactLink\">";
				echo $link;
			echo "</div>";
		}
		?>
		<div id="image_holder">
		
	
		</div>
	</div>
	<div class="footer">Know all flickr recent feeds</div>
	
</body>
</html>