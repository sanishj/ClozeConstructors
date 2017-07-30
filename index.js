var fs = require("fs");
var inquirer = require('inquirer');
var color = require('colorful'); //This package makes the CLI messages more 'colorful'

var BasicFlashcard = require("./basicflashcard");
var ClozeFlashcard = require("./clozeflashcard");

var basicCardArrayData = [];
var clozeCardArrayData = [];

// card generator function 
cardInit = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'cardType',
        message: color.magenta_bg('\nBasic or Cloze card\n'),
        choices: ['Create Basic Card', 'Create Cloze Card', 'Exit']
    }]).then(function (option) {
        switch (option.cardType) {
            case 'Create Basic Card': createBasicCard(); //calling the basic card generator function
                break;
            case 'Create Cloze Card': createClozeCard(); //calling the CLoze card generator function
                break;
            case "Exit": return;
        }
    })
}

// function to create basic cards with user input
createBasicCard = function () {
    inquirer.prompt([{
        type: "input",
        name: 'front',
        message: color.magenta_bg('\nEnter question ?')
    }, {
        type: 'input',
        name: 'back',
        message: color.magenta_bg('\nEnter answer ')
    }]).then(function (answer) {
        var answerBasic = new BasicFlashcard(answer.front, answer.back);
        basicCardArrayData.push(answerBasic);

        fs.readFile('basicCards.json', 'utf8', function (err, content) {
            if (err) {
                console.log('There is an Error: ' + err);
            }
            var parseJson = content ? JSON.parse(content) : [];
            parseJson.push(answerBasic);
            var stringJson = JSON.stringify(parseJson, null, 2);
            fs.writeFile('basicCards.json', stringJson, function (err) {
                if (err) throw err;
            });
        });
        console.log(color.green_bg('Your Basic Card has been Created.'));
    });
}

// function to create cloze cards with user input
createClozeCard = function () {
    inquirer.prompt([{
        type: "input",
        name: 'partialText',
        message: color.magenta_bg('\nEnter the partial text of the card')
    }, {
        type: 'input',
        name: 'deletedText',
        message: color.magenta_bg('\nEnter the deleted text of the card')
    }]).then(function (answer) {
        var answerCloze = new ClozeFlashcard(answer.partialText, answer.deletedText);
        clozeCardArrayData.push(answerCloze);

        fs.readFile('clozeCards.json', 'utf8', function (err, content) {
            if (err) {
                console.log('There is an Error: ' + err);
            }
            var parseJson = content ? JSON.parse(content) : [];
            parseJson.push(answerCloze);
            var stringJson = JSON.stringify(parseJson, null, 2);
            fs.writeFile('clozeCards.json', stringJson, function (err) {
                if (err) throw err;
            });
        });
        console.log(color.green_bg('Your Cloze Card has been Created.'));
    });
}

cardInit();