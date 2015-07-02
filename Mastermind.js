//MASTERMIND

Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
}

//WYSZUKIWANIE CZARNYCH i BIAŁYCH
Array.method('mastermindCheck', function(fBlackAndWhite, tabToCompare, counter){
	if (this.length != tabToCompare.length){
		console.log("Different elements length");
	}

	for(var i = 0; i < this.length; i++){
		fBlackAndWhite(this[i] , tabToCompare[i], counter);
	}
	
	return {
		'black': counter.resBlack,
		'white': counter.resWhite
	};
	
});

//SPRAWDZANIE CZARNYCH I BIAŁYCH
function checkBlackAndWhite(argArr1, argArr2, count){
	if (argArr1 === argArr2){
		count.resBlack+=1;
	} else {
		count.resWhite+=1;
	}
}


//TABLICA DO PORÓWNANIA
var arrToCompare = [3, 2, 5, 1, 4];
var count = {
	'resBlack': 0,
	'resWhite': 0
};

//WYWOŁANIE FUNKCJI SPRAWDZAJĄCEJ
var res = [2,3,5,1,4].mastermindCheck(checkBlackAndWhite, arrToCompare, count);

//WYNIKI
console.log("Numbers of black: " + res.black);
console.log("Numbers of white: " + res.white);


