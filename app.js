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



//=============== lab 6 ================
function askUser(question) {
    let answer = prompt(question + " (Yes/No)");
    while (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
        return "invalid";
    }
    return answer;
}

function allAnswer() {
    let answers = []; 
    let answer = askUser("Have you tried Hamdan Restaurant before?");
    answers.push(answer === "invalid" ? "invalid" : answer);
    
    answer = askUser("Would you recommend our restaurant to others?");
    answers.push(answer === "invalid" ? "invalid" : answer);
    
    answer = askUser("Do you find our food suitable to your taste?");
    answers.push(answer === "invalid" ? "invalid" : answer);

    return answers;
}

function printAllAnswer(answers) {
    console.log("User Answers:");
    for (let i = 0; i < answers.length; i++) {
        console.log("Question " + (i + 1) + ": " + answers[i]);
    }
}

function main() {
    let userAnswers = allAnswer();
    printAllAnswer(userAnswers);
}

main();
