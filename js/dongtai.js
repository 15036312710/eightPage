var a = document.getElementById("btn").getElementsByTagName("a");
var li = document.getElementById("pic").getElementsByTagName("li");

a[0].style.background = ("#8BCEED");
a[0].style.color = "red";
li[0].style.display = ("block");

 for(var i=0; i < a.length; i++){

	a[i].index = i;

	a[i].onclick = function(){

		for(var i=0; i<a.length; i++){
		
		li[i].style.display = ("none");
		a[i].style.color = "white";
		a[i].style.background = "#6F6F6F";
		}

		a[this.index].style.background = ("#8BCEED");
		li[this.index].style.display = ("block");
		a[this.index].style.color = "red";
	}
}
