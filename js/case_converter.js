function caseConvert(str, conversionType) {
	var convertedStr = "";
	if(conversionType == "camelcase") {
		var words = str.split("_");
		convertedStr = words[0];
		for(var i = 1; i < words.length; i++) {
			convertedStr += words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
		}
	} else if(conversionType == "snakecase") {
		var index = 0;
		var words = [];
		for(var i = 0; i < str.length; i++) {
			if(str.substring(i, i+1) == str.substring(i, i+1).toUpperCase()) {
				words.push(str.substring(index, i).toLowerCase());
				index = i;
			}
		}
		words.push(str.substring(index).toLowerCase());
		for(var j = 0; j < words.length; j++) {
			if(j < words.length - 1) {
				convertedStr += words[j] + "_";
			} else {
				convertedStr += words[j];
			}
		}
	}
	return convertedStr
}

var a = "hello_world_bear_tiger_man";
var b = "helloWorldBearTigerMan";
console.log(caseConvert(a, "camelcase"));
console.log(caseConvert(b, "snakecase"));