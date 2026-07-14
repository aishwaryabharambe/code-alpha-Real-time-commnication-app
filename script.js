function sendMessage(){

let msg =
document.getElementById("message").value;

document.getElementById("chatBox").innerHTML +=
"<p>" + msg + "</p>";

document.getElementById("message").value = "";
}