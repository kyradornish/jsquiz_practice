var l_1 = [
    ["What is the world's largest river?", "Amazon"],
    ["How many valves does a trumpet have?", "3"],
    ["What color is Absynthe?", "Green"],
    ["What is Nebraska's state bird?", "Meadowlark"],
    ["Who was the shortest Founding Father?", "James Madison"]
];


var correct = [];
var wrong = [];

function askQuestions(l_1) {
    for (i = 0; i < l_1.length; i++) {
        var question = prompt(l_1[i][0])
        if (question == null || question == "") {
            txt = "User cancelled prompt";
        } else if (question == l_1[i][1]) {
            correct.push(l_1[i]);
        } else {
            wrong.push(l_1[i]);
        }
    }
}

function displayAnswers(correct, wrong){
    $("#quiz").html(
        "<h2>J-Quiz Results</h2>" +
        "<h3>You answered " + correct.length + " correctly!"
    );
    
    for (i = 0; i < correct.length; i++) {
        $("#quiz").append(
            (i + 1) + ": " + correct[i][0] + "<br>Answer: " + correct[i][1] + "<br><br>"
        );  
    };

    $("#quiz").append("<br><br><br><h3>You answered " + wrong.length + " wrong.");

    for (i = 0; i < wrong.length; i++) {
        $("#quiz").append((i + 1) + ": " + wrong[i][0] + "<br>Answer: " + wrong[i][1] + "<br><br>");
    };
}

$("#start").click( () => {
    askQuestions(l_1);
    displayAnswers(correct, wrong);
});
