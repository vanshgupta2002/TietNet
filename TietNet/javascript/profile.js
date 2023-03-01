var loadFile1 = function(event) {
	    var output = document.getElementsByClassName("profilepic");
	    output[0].src = URL.createObjectURL(event.target.files[0]);
	};