var buttonCalcTip = document.getElementById('buttonCalcTip');
buttonCalcTip.addEventListener("click",function(){

	var finalBill = document.getElementById('finalBill').value;
	finalBill = parseInt(finalBill);

	var tipCalculate = calculateTip(finalBill);

	var spanTip = document.getElementById('spanTip');
	spanTip.innerHTML = tipCalculate;


});

function calculateTip(num){

	var ok = document.getElementById('radioOK')
	var great = document.getElementById('radioGreat');
	var amazing = document.getElementById('radioAmazing');

	if(ok.checked) {
  		return "Bill: " + num + "\nTip: " + parseInt((num * 0.12)) + "\nTotal: " + parseInt((num + (num * 0.12)));
	}
	else if(great.checked) {
  		return "Bill: " + num + "\nTip: " + parseInt((num * 0.15)) + "\nTotal: " + parseInt((num + (num * 0.15)));
	}
	else if(amazing.checked){
		return "Bill: " + num + "\nTip: " + parseInt((num * 0.17)) + "\nTotal: " + parseInt((num + (num * 0.17)));
	}
}