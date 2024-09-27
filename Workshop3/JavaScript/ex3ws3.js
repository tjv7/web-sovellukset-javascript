function textboxFocus() {
    let textbox = document.querySelector("#textdata");
    textbox.placeholder = "Please fill in the form with proper data.";
    textbox.style.background = "beige";
}

let keyPressCount = 0;

function keyPressAdd() {
    keyPressCount++;
    console.log(keyPressCount);
    let keyPressTotal = "Total keypresses: " + keyPressCount;
    document.querySelector("#charcount").innerHTML = keyPressTotal;
}

function formEmptyCheck() {
    console.log("checking if empty");
    let textboxContent = document.querySelector("#textdata").value;
    console.log(textboxContent);
    if (textboxContent == "") {
        alert("Please fill out the form before sending.");
    } else {
        alert("Thank you for submitting the form.");
    }
}

// onsubmit ?
// form validation ?
// innerHTML vs value
