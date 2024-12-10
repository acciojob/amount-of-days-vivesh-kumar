//your JS code here. If required.
function daysOfAYear(year){
	// writer code here...
	if (year % 4 ==0 && year %100 !=0 || year %400==0){
		return true;
	}
	else{
		return false;
	}
}
let year = prompt("Enter the Year: ");
result = daysOfAYear(year);
if (year == true){
	console.log(366);
}
else{
	console.log(365);
}
