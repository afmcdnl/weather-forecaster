let Temperature = 0
basic.showString("Welcome to the Weather Forecast.")
basic.clearScreen()
// To work this product all you have to do is slide the temperature bar up or down. If the temperature is 16 or more degrees celcius than it'll say it's hot outside and if it's 15 or less degrees than it'll say it's cold outside. 
basic.forever(function () {
    Temperature = input.temperature()
    basic.showNumber(Temperature)
    if (input.temperature() >= 16) {
        basic.showString("IT IS HOT OUTSIDE WEAR SOME LIGHT CLOTHES")
        basic.clearScreen()
    }
    if (input.temperature() <= 15) {
        basic.showString("IT IS COLD OUTSIDE WEAR A JACKET")
        basic.clearScreen()
    }
})
