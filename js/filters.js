
document.addEventListener("DOMContentLoaded", function () {
// Assuming myArray is your array
var myArray = [1, 2, 3];

// Convert the array to a JSON string and store it in sessionStorage
sessionStorage.setItem('myArray', JSON.stringify(myArray));
var retrievedData = sessionStorage.getItem('myArray');
    var parsedArray = JSON.parse(retrievedData);
    console.log(parsedArray);
});