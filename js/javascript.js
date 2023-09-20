function Operaciones() {
    // Get input values using class names
    var dato1 = parseFloat(document.querySelector(".d1").value); // Use parseFloat to convert input values to numbers
    var dato2 = parseFloat(document.querySelector(".d2").value);

    // Check if both inputs are valid numbers
    if (isNaN(dato1) || isNaN(dato2)) {
        document.getElementById("demo").innerHTML = "Please enter valid numbers.";
    } else {
        // Perform the multiplication
        var result = dato1 * dato2;
        console.log(result);

        document.getElementById("demo").innerHTML = "Result: " + result;
    }
}