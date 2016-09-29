// In this way i create the module, This is Immediately-Invoked-Function-Expressions, for creating privacy
var myModule = (function(){
	var moduleProp = 1; 
	// creating function as function expression way.
	function moduleMethod(){
		var insideVar =  2;
		// Now creating a clousure function in funtion declaration way.
		var clousureFn= function(){
			var closureLex =  3;
			console.log(insideVar, moduleProp);// we can access outside var due to closure.
		}

		return { insideVar : insideVar, closureFn:clousureFn};
	}
	// we can't access varieble of inside moduleMethod. This is scope of varieble inside.
	return {
		moduleProp : moduleProp,
		moduleMethod : moduleMethod()
	}
})();
