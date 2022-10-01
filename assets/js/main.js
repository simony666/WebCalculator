let display = document.getElementsByClassName("display");
let buttons = document.getElementsByClassName("button");

$(document).ready(function() {
	var keyin = "";
	var ans = "";
	var memoans = "";
	
	$(".button").click(function(a){
		btntype = $(this).attr("id");
		value=$(this).attr("value");
		
		
		if (value == "ac"){
			keyin = "";
			memoans = ans;
			ans = "";
		}else if (value == "del"){
			keyin.slice(0, -1) ;
		}else if (value == "="){
			calc();
		}else if (value == "Ans"){
			keyin += value;
		}else if (btntype == "numb"){
			if (ans != ""){
				memoans = ans;
				ans = "";
			}
			keyin += value;
		}else if (btntype == "symb"){
			if (ans != ""){
				memoans = ans;
				ans = "";
				keyin += "Ans";
			}
			keyin += value;
		}
		display();
		
		//console.log("KeyIn "+keyin + " Ans "+ans + " MemoAns "+memoans);
	});
	
	function display(){
		if (ans==""){
			displayval = ""
			for (var i=0;i<keyin.length;i++){
				displayval += keyin[i]
			}
			if (displayval == ""){
				$(".display").text("0");
			}else{
				$(".display").text(displayval);
			}
		}else{
			$(".display").text(ans);
		}
	}
	
	function calc(){
		keyin = keyin.replace("Ans", memoans);
		ans = eval(keyin);
		keyin = "";
	}
});