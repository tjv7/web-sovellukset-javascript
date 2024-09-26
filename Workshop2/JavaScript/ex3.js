console.log(navigator.userAgent)
// console.log(navigator.appVersion)
// console.log(navigator.appCodeName)
// console.log(navigator.appName)

const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
console.log(isFirefox)

if (isFirefox) {

    // Avaa samassa ikkunassa, uudessa tabissä
    window.open("http://www.mozilla.org")

    // Avaa samassa ikkunassa ja tabissä
    // window.open("http://www.mozilla.org", "_self")

} else {
    window.open("https://www.hs.fi/")
}
