// function to post a new post
function mypost()
{
	/*====Parent DIV (mainpost)========*/
	var div=document.createElement("DIV");
	div.className="mainpost";

	/* -------- adding div at the top ---------*/
	var parent=document.getElementsByClassName("allpost");
	parent[0].insertBefore(div, parent[0].childNodes[0]);

	/*============ DIV userimg ===============*/
	var div1=document.createElement("DIV");
	div1.className="userimg";
	var img=document.createElement("img");
	img.src="../images/profile/upload.png";
	div1.appendChild(img);
	div.appendChild(div1);

	/*============ DIV username ===============*/
	var div2=document.createElement("DIV");
	div2.className="username";
	var para=document.createElement("p");
	para.className="name";
	var text1=document.createTextNode("Armaan Singh");
	para.appendChild(text1);
	div2.appendChild(para);
	div.appendChild(div2);

	/*---------- paragraph time ---------------*/
	var para1=document.createElement("p");
	para1.className="time";
	var text2=document.createTextNode("Just now");
	para1.appendChild(text2);
	div.appendChild(para1);

	/*---------- paragraph quotes ---------------*/
	var para2=document.createElement("p");
	para2.className="quotes";
	var pararec=document.getElementById("mypara");
	// var paapa=pararec.value;
	var paapa=pararec.value.replace(/\s/g, "\u00a0");
	pararec.value="";

	var text3=document.createTextNode(paapa);
	para2.appendChild(text3);
	div.appendChild(para2);

	/*============ DIV post ===============*/
	var div3=document.createElement("DIV");
	div3.className="post";
	var img1=document.createElement("img");
	img1.className="postimg";
	var output = document.getElementById('load2');
    img1.src = output.src;
    output.src="";
	div3.appendChild(img1);
	div.appendChild(div3);
	var para3=document.createElement("p");
	para3.className="like";
}

// load view image to be posted
 var loadFile = function(event) {
	    var output = document.getElementById('load2');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };

// changing imagebutton color on hover
 function onbuttoncolor()
 {
 	var on=document.getElementById("imgbttn");
 	on.style.backgroundColor = "#009688";
 	on.style.color="white";
 }

// chaging imagebutton color on hover out
 function outbuttoncolor()
 {
 	var out=document.getElementById("imgbttn");
 	out.style.backgroundColor = "white";
 	out.style.color="black";
 }
