function pointerCoords(event) {
    // console.log("Pointer location:", event.clientX, event.clientY)
    // console.log(document.querySelector("#coords"))
    let coordX = event.clientX;
    let coordY = event.clientY;

    let coordsText = "X: " + coordX + "  -  Y: " + coordY;
    let newHeading = "Exercise 4 - Your pointer coordinates are: " + coordsText;

    document.querySelector("#coords").innerHTML = newHeading;
}
