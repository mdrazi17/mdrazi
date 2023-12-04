var $ = function (id) {
  return document.getElementById(id);
};

let calculateTax = function (subtotal, taxrate) {
  return (subtotal * (taxrate / 100)).toFixed(2);
};

// Code an event handler (function) named processEntries() that gets the user entries,
let processEntries = function () {
  let subTotal = parseFloat($("subtotal").value).toFixed(2);
  let taxRate = parseFloat($("tax_rate").value).toFixed(2);

  // Add data validation to the processEntries() function.
  // The subtotal entry should be a valid, positive number that’s less than 10,000.
  // The tax rate should be a valid, positive number that’s less than 12.
  if (isNaN(subTotal) || isNaN(taxRate)) {
    alert("Both entries must be numeric");
  } else if (
    subTotal <= 0 ||
    subTotal >= 10000 ||
    taxRate <= 0 ||
    taxRate >= 12
  ) {
    // The error messages should be displayed in alert dialog boxes
    alert("Subtotal must be > 0 and < 10000 and Tax Rate must be > 0 and < 12");
  } else {
    // calculates the sales tax and total, and displays those results in the textboxes.
    let salesTax = parseFloat(calculateTax(subTotal, taxRate));
    $("sales_tax").value = salesTax;
    $("total").value = (parseFloat(salesTax) + parseFloat(subTotal)).toFixed(2);
  }

  // Add JavaScript that moves the cursor to the Subtotal field when the application starts
  // and when the user clicks on the Calculate button.
  $("subtotal").focus();
};

// Add the JavaScript event handler for the click event of the Clear button.
// This should clear all text boxes.
let clearEntries = function () {
  clearSubtotal();
  clearTaxRate();
  $("sales_tax").value = "";
  $("total").value = "";

  // move the cursor to the Subtotal field.
  $("subtotal").focus();
};

// Code an onload event handler that attaches the processEntries() function
// to the click event of the Calculate button.
// Then, test what you have so far.
window.onload = function () {
  // Add JavaScript that moves the cursor to the Subtotal field when the application starts.
  $("subtotal").focus();
  $("calculate").onclick = processEntries;

  $("clear").onclick = clearEntries;

  $("subtotal").onclick = clearSubtotal;
  $("tax_rate").onclick = clearTaxRate;
};

// Add JavaScript event handlers for the click events of the Subtotal and Tax Rate text boxes.
// Each handler should clear the data from the text box.
let clearSubtotal = function () {
  $("subtotal").value = "";
};

let clearTaxRate = function () {
  $("tax_rate").value = "";
};
