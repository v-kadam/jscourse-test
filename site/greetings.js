var today = new Date();
var time = today.getHours();
var greetings;

if(time> 5 && time<11){
    greetings="Good Morning!";
}
else if(time>12 && time<17){
    greetings="Good Afternoon!";
}
else if(time>18 && time<22){
    greetings="Good Evening!";
}
else {
    greetings="Welcome!";
}

document.write("<h3>"+greetings+"</h3>");
