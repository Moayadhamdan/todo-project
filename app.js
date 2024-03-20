var name = prompt("Please enter your name:");



var gender = prompt("Enter your gender (male or female):");
if (gender ==='male' || gender==='female'){
    alert("Greate");
} else {
    alert("Invalid gender input!");
}


var age = prompt("Enter your age:");
if (age <= 0){
    alert("Age is less than or equal to zero");
} 


var skipMessage = confirm("Do you want to skip the welcoming message?");
if (!skipMessage){
    if (gender ==='male'){
        alert("Welcome Mr."+ name);
    } else if (gender==='female'){
        alert("Welcome Ms." + name);
    } else {
        alert(name);
    }
}
