function greetings () {
    var greeting;
    var hour = new Date().getHours();
}
    if (hour < 11) {
        greeting = "Good Morning"
    }
    else if (hour < 14) {
        greeting = "Good Afternoon"
    }
    else {
        greeting = "Good Evening "
    }
    document.getElementById("hour").innerHTML = "Current hour right now is " + hour;
    document.getElementById("greet").innerHTML = greeting;
