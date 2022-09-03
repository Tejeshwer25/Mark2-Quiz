console.log("Welcome to this quiz on: The Indian Army!!");
console.log("---------------------------------------------------\n");

var readLine = require('readline-sync'),
    chalk = require('chalk');
var score = 0,
    highscore = 0;
var lev_one = [{
        "question": "The Indian Armed Forces has mainly how many branch ?",
        "answer": 3
    },
    {
        "question": "Training for joining the army, navy or the air force takes place at ",
        "answer": "nda"
    }
];

var lev_two = [{
        "question": "Commado division of Indian Army is known as",
        "options": ["Garud", "Marcos", "Seal", "Para SF"],
        "answer": "Para SF"
    },
    {
        "question": "Marshal of the Indian Air Force",
        "options": ["Sam Manekshaw", "Nirmaljeet Singh Sekhon", "Arjan Singh", "BS Dhanoa"],
        "answer": "Arjan Singh"
    },
    {
        "question": "Supreme Commander of the Indian Armed Forces is: ",
        "options": ["President", "CDS", "NSA", "Field Marshal"],
        "answer": "President"
    },
    {
        "question": "What are the colors of the Indian Navy",
        "options": ["Navy Blue & White", "White and Black", "Gold, Blue, black", "White, blue, yellow"],
        "answer": "Navy Blue & White"
    },
    {
        "question": "When is army day celebrated",
        "options": ["15 Jan", "15 June", "15 Aug", "26 Aug"],
        "answer": "15 Jan"
    }
];

var lev_three = [{
        "question": "Commando Division of the Indian Air Force is known as: ",
        "options": ["Garud", "Marcos", "RR", "Seals"],
        "answer": "Garud"
    },
    {
        "question": "Number of commands of the indian army",
        "options": ["5", "6", "8", "7"],
        "answer": "7"
    },
    {
        "question": "The first Chief of Defense Staff was: ",
        "options": ["Gen. Bipin Rawat", "Air Chief Marshal BS Dhanoa", "Admiral Sunil Lamba", "Gen. MM Naravane"],
        "answer": "Gen. Bipin Rawat"
    }
];

var userName = readLine.question("Enter your name: ");
console.log("Welcome " + userName);

function checkAnswer(question, answer, options) {
    highscore++;
    if (options == undefined) {
        var userAns = readLine.question(question + ": ");
        if (userAns.toLowerCase() == answer) {
            score++;
            console.log(chalk.bgGreen("You're correct \n"));
        } else {
            console.log(chalk.bgRed("You're Worng \n"));
        }
    } else {
        var userAns = readLine.keyInSelect(options, (question + ": "));
        readLine.keyInPause();

        if (options[userAns] == answer) {
            score++;
            console.log(chalk.bgGreen("You're correct \n"));
        } else {
            console.log(chalk.bgRed("You're Wrong \n"));
        }
    }
}

console.log(chalk.white.underline("\nLevel One!!!!"));
console.log("Get both questions correct to progress to level 2...");
for (i = 0; i < (lev_one.length); i++) {
    checkAnswer(lev_one[i].question, lev_one[i].answer);
}

if (score == 2) {
    console.log(chalk.white.underline("\nYou progress to level 2!!!!"));
    for (i = 0; i < lev_two.length; i++) {
        checkAnswer(lev_two[i].question, lev_two[i].answer, lev_two[i].options);
    }
}
if (score > 4) {
    console.log(chalk.white.underline("\nYou progress to level 3!!!"));
    for (i = 0; i < lev_three.length; i++) {
        checkAnswer(lev_three[i].question, lev_three[i].answer, lev_three[i].options);
    }
}

console.log(chalk.bgBlue("Your Score is: " + score + "/" + highscore));
