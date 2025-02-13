const Questions = [
    {
        q: "Fill in the blank: What religon strives for peace of mind?.",
        a: [{text: "Christianity.", isCorrect: false},
            {text: "Islam.", isCorrect: false},
            {text: "Buddhism.", isCorrect: true},
            {text: "Hinduism.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: What religion prays five times a day?.",
        a: [{text: "Judaism.", isCorrect: false},
            {text: "Islam.", isCorrect: true},
            {text: "Baha'i.", isCorrect: false},
            {text: "Christianity.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: What religion has baptism as a rite of initiation.",
        a: [{text: "Christianity.", isCorrect: true},
            {text: "Shakers.", isCorrect: false},
            {text: "Buddhism.", isCorrect: false},
            {text: "Masons.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: What religion does worship in a temple.",
        a: [{text: "Islam.", isCorrect: false},
            {text: "Baha'i.", isCorrect: false},
            {text: "Christianity.", isCorrect: false},
            {text: "Hinduism.", isCorrect: true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
