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
    let answer = prompt(question + "(Yes/No)");
    while (answer !== "yes" && answer !== "no" && answer !== "") {
        answer = prompt("please enter a valid answer (Yes/No)");
    }
    return answer;
}

function allAnswer() {
    let answers = []; 
    answers.push(askUser("Have you tried Hamdan Restaurant before?"));
    answers.push(askUser("Would you recommend our restaurant to others?")); 
    answers.push(askUser("Do you find our food suitable to your taste?"));

    return answers;
}

function printAllAnswer(answers) {
    console.log("User Answers:")
    for (let i = 0; i < answers.length; i++) {
        console.log("Question " + (i + 1) + ": " + answers[i]);
    }
}

function main() {
    let userAnswers = allAnswer();
    printAllAnswer(userAnswers)
}

main();