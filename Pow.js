// Get the power without using ** pow or any other Math operations

function numberToPower(number, power) {
    var total = 1;
    for (var i = 1; i <= power; i++) {
        total = total * number;
    }
    return total
}