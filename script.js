const display = document.getElementById('display')

// Get input values
function appendToDisplay(input) {
  display.value += input
}

//Caculate Total
function calculateTotal() {
    try {
        display.value = eval(display.value)
    }catch(error){
        display.value = "Error"
    }
}

// Clear Display
function clearDisplay() {
  display.value = ''
}
