function creditCard(number) {
	if(number.length == 15) {
		if((number.substring(0, 2) == "37") || (number.substring(0, 2) == "34"))
			console.log("American Express: %s is valid", number);
		else
			console.log("%s is not vaild", number);
	} else if(number.length == 16) {
		if(number.substring(0, 4) == "6011")
			console.log("Discover Card: %s is valid", number);
		else if(number.substring(0, 1) == "4")
			console.log("Visa: %s is valid", number);
		else if((number.substring(0, 2) >= 50 &&  number.substring(0, 2)) <= 55)
			console.log("MasterCard: %s is valid", number);
		else
			console.log("%s is not valid", number);
	}
}

// valid
creditCard("6011123456789012");
creditCard("341112345678902");
creditCard("4011123456789012");
creditCard("5011123456789012");
creditCard("5111123456789012");
creditCard("5211123456789012");
creditCard("5311123456789012");
// invalid
creditCard("451123456789012");
creditCard("3711123456789012");