let username; // declare the variable first

// using this below statement it is run only click the Button.and after function is running;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("p1").innerHTML = "Welcome "+username;
}