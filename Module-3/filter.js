var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number Array:", numberArray);

function above5ArrayElements(value) {
	return value>5;
}
var filteredNumberArray = numberArray.filter(above5ArrayElements);
console.log("Filtered Number Array = ", filteredNumberArray);

var shoppingList1 = [
		"Black Books","Bic Pens","Towel","Graph Books","Tooth paste","Art Books","Sugar",
	];
console.log("My Shopping List = ", shoppingList1);

var searchItem = "Books";
function searchForBooks(value) {
	return value.indexOf(searchItem) !== -1;
}

var searchResult = shoppingList1.filter(searchForBooks);
console.log("Books found = ", searchResult);