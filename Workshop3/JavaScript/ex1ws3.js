function button1() {
    let currentTime = new Date();
    alert("You clicked me! The Current date is: " + currentTime);
}

function showTable() {
    document.write(`
        <table id="example" class="display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                </tr>
                <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                </tr>              
            </tbody>
        </table>
    `);
}

function userLocation() {
    navigator.geolocation.getCurrentPosition(displayLocation);
}

function displayLocation(position) {
    console.log("Your coordinates are as follows.");
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);

    let locationText =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;

    document.write(locationText);
}
