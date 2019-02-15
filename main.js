
//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
// var request = new XMLHttpRequest();

// request.open('GET', 'http://yesno.wtf/api/', true);
// request.onload = function () {

//   var data = JSON.parse(this.response);

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(response => {
//       console.log(response);
//     });
//   } else {
//     console.log('error');
//   }
// }

// request.send();

var text = document.getElementById("answer");
var appBackground = document.getElementById("background");

async function showYesNoGif() {
    var yesNoResponseJson = await fetchYesNoDecision();
    showYesNoResult(yesNoResponseJson);
}

async function fetchYesNoDecision() {
    var apiEndpoint = "https://aws.random.cat/meow";
    const response = await fetch(apiEndpoint);
    const parsedPromise = await response.json();
    console.log("Response has been parsed: [" + parsedPromise + "] from response [" + response + "]");
    return parsedPromise;
}

function showYesNoResult(yesNoResult) {            
    //text.innerHTML = yesNoResult["answer"];
    appBackground.style.backgroundImage = "url('"+yesNoResult["file"]+"')";    
}

showYesNoGif();