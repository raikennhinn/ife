var res = {
	"arr":[],
	"left-in":function(){
		var value = document.getElementById("input").value;
		pattern = /^[0-9]+$/;
		if(pattern.test(value)){
			res.arr.unshift(value);
			render();
		}else{
			alert("请输入数字");
		}
	},
	"right-in":function(){
		var value = document.getElementById("input").value;
		pattern = /^[0-9]+$/
		if(pattern.test(value)){
			res.arr.push(value);
			render();
		}else{
			alert("请输入数字");
		}
	},
	"left-out":function(){
		alert(res.arr.shift());
		render();
	},
	"right-out":function(){
		alert(res.arr.pop());
		render();
	}

}

var getButton = document.getElementsByTagName("button");
for(var i=0;i<getButton.length;i++){
	console.log(res['abc'])
	getButton[i].onclick = res[getButton[i].id]
}

function render(){
	var str=""
	var getDisplay = document.getElementById("display-area");
	for(var i=0;i<res.arr.length;i++){
		str += "<div>" + res.arr[i] + "</div>"
	}
	getDisplay.innerHTML = str;
	var getDisplay = document.getElementById("display-area");
	var getDiv = getDisplay.getElementsByTagName("div");
	for(var i=0;i<getDiv.length;i++){
	getDiv[i].onclick = function(){
		alert(this.innerHTML)
		getDisplay.removeChild(this)

	}
}
}
