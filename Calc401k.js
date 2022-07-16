function InvestmentCalculator() {
	var prin = document.getElementById("principal").value.toString();
	var p = parseFloat(prin);
	
	var time = document.getElementById("time").value.toString();
	var t = parseFloat(time);

	var rate = document.getElementById("returnrate").value.toString();
	var r = parseFloat(rate);

	var addcontrib = document.getElementById("addcont").value.toString();

	var tlength = document.getElementById("timelength");
	var tIndex = tlength.selectedIndex;
    	var tValue = tlength.options[tIndex].innerHTML;
	
	if (addcontrib == "")
	{
		//If there is no additional contribution, just use basic compound interest
		var tempbal = p * Math.pow((1 + (r/100)), t);
		var finalbal = tempbal.toString();
		
		if(finalbal.includes(".")) {
			finalbal = finalbal.substring(0,finalbal.indexOf(".") + 3);
		}
		else {
			finalbal = finalbal + ".00";
		}
		document.getElementById("answer").innerHTML = "Final Balance: $" + finalbal;
	}
	else {
		var c = parseFloat(addcontrib);

		if (tValue == ""){
			document.getElementById("answer").innerHTML = "Please select the interval in which the additional contributions will be added.";
		}
		else {
			if (tValue == "Yearly") {
				//If contribution is yearly
				var tempbal = p;
				for(i = 0;  i<t; i++) {
					tempbal = tempbal * (1 + (r/100)) + c;
				}
				var finalbal = tempbal.toString();
			}

			else if (tValue == "Semi-Annually") {
				//If contribution is semi-annually
				
				var tempbal = p;
				for(i = 0;  i< (t*2); i++) {
					tempbal = tempbal * (1 + (r/100)/2) + c;
				}
				var finalbal = tempbal.toString();
			}
			
			else if (tValue == "Quarterly") {
				//If contribution is quarterly
				
				var tempbal = p;
				for(i = 0;  i< (t*4); i++) {
					tempbal = tempbal * (1 + (r/100)/4) + c;
				}
				var finalbal = tempbal.toString();
			}

			else if (tValue == "Bimonthly") {
				//If contribution is bimonthly
				
				var tempbal = p;
				for(i = 0;  i< (t*6); i++) {
					tempbal = tempbal * (1 + (r/100)/6) + c;
				}
				var finalbal = tempbal.toString();
			}

			else if (tValue == "Monthly") {
				//If contribution is monthly
				//Current issue is that this is compounded monthly while the yearly code is compounded yearly, leading to differences in the value that should be reported.
				var tempbal = p;
				for(i = 0;  i< (t*12); i++) {
					tempbal = tempbal * (1 + (r/100)/12) + c;
				}
				var finalbal = tempbal.toString();
			}

			else if (tValue == "Biweekly") {
				//If contribution is biweekly
				
				var tempbal = p;
				for(i = 0;  i< (t*26); i++) {
					tempbal = tempbal * (1 + (r/100)/26) + c;
				}
				var finalbal = tempbal.toString();
			}

			else if (tValue == "Weekly") {
				//If contribution is weekly
				
				var tempbal = p;
				for(i = 0;  i< (t*52); i++) {
					tempbal = tempbal * (1 + (r/100)/52) + c;
				}
				var finalbal = tempbal.toString();
			}

			else if (tValue == "Daily") {
				//If contribution is daily
				
				var tempbal = p;
				for(i = 0;  i< (t*365); i++) {
					tempbal = tempbal * (1 + (r/100)/365) + c;
				}
				var finalbal = tempbal.toString();
			}
		
		if(finalbal.includes(".")) {
			finalbal = finalbal.substring(0,finalbal.indexOf(".") + 3)
		}
		else {
			finalbal = finalbal + ".00";
		}
		document.getElementById("answer").innerHTML = "Final Balance: $" + finalbal;
		}
	}
}

function Calc401k () {
	var sal = document.getElementById("salary").value.toString();
	var s = parseFloat(sal);

	var cont = document.getElementById("contributeper").value.toString();
	var c = parseFloat(cont);

	var max = document.getElementById("maxper").value.toString();
	var m = parseFloat(max);
	
	var time = document.getElementById("time").value.toString();
	var t = parseFloat(time);

	var rate = document.getElementById("returnrate").value.toString();
	var r = parseFloat(rate);
	
	//Yearly contribution by person
	var pcont = s * (c/100);

	//Yearly contribution by employer
	if(c<=m) {
		var econt = s * (c/100);
	}
	else if (c>m) {
		var econt = s * (m/100);
	}
	
	//Find total yearly contribution
	var ycont = econt + pcont;

	
	//Find the final balance

	var tempbal = 0;
	for(i = 0;  i<t; i++) {
		tempbal = tempbal * (1 + (r/100)) + ycont;
	}
	var finalbal = tempbal.toString();


	//Formatting the answer
	
	if(finalbal.includes(".")) {
		finalbal = finalbal.substring(0,finalbal.indexOf(".") + 3)
	}
	else {
		finalbal = finalbal + ".00";
	}
	document.getElementById("answer").innerHTML = "Final Balance: $" + finalbal;
}