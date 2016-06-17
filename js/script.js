function changer(){
	var element = document.getElementById("appear")
	var text = "How do you like me now?!?"
	if(element.innerHTML == ""){
		element.innerHTML = text;
	}
	else{
		element.innerHTML ="";
	}

}