console.log("This is my script")

let result = {
        "email": "support@emailvalidation.io",
        "user": "support",
        "tag": "",
        "domain": "emailvalidation.io",
        "smtp_check": false,
        "mx_found": true,
        "did_you_mean": "",
        "role": true,
        "disposable": false,
        "score": 0.48,
        "state": "unknown",
        "reason": "no_connect",
        "free": false,
        "format_valid": true,
        "catch_all": null   
}

//let resultCont = document.getElementById("resultCont")
//let submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img src="Image/loading.svg" width="70" alt="loader">`
    
    document.getElementById('submitBtn').addEventListener('click', function() {
        // Show the loader
        document.getElementById('loader').style.display = 'inline-block'; // Show the loader
        document.getElementById('resultCont').childNodes[0].nodeValue = ''; // Clear the text
    
        // Simulating a request (replace this with your actual request logic)
        setTimeout(function() {
            // Hide the loader after the request is done
            document.getElementById('loader').style.display = 'none'; // Hide the loader
            document.getElementById('resultCont').childNodes[0].nodeValue = 'Results are displayed here.'; // Show results
        }, 3000); // Simulate a delay for 3 seconds
    });

    let key = "ema_live_KB6Wa70DfHNfODTuVngD7lJxgnVfXwcBkfdj3ypu"
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})











