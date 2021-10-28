let quizData = [{
    question: 'Who created The Manga Of Attack On Titan?',
    a1: 'Eicchiro Odda',
    a2: 'Hajime Issiyama',
    a3: 'Massachi Kishimoto',
    a4: 'none of them',
    correct: 'a2'
},
{
    question: 'When did The manga was created?',
    a1: '2009',
    a2: '2013',
    a3: '2005',
    a4: 'None of them',
    correct: 'a1'
},
{
    question: `what is eren's father's name?`,
    a1: 'Magath',
    a2: 'Willy',
    a3: 'Brown',
    a4: 'None of them',
    correct: 'a4'
},
{
    question: `What is the name of the island that eren lived in it?`,
    a1: 'Paris',
    a2: 'Paradise',
    a3: 'Marley',
    a4: 'Relizane',
    correct: 'a2'
}]
let quiz = document.querySelector('.quiz-container');
let quizQuestion = document.getElementById('question');
let answers = document.querySelectorAll('input');
let option1 = document.getElementById('a_text');
let option2 = document.getElementById('b_text');
let option3 = document.getElementById('c_text');
let option4 = document.getElementById('d_text');
let submBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;
reloadQuiz();
function reloadQuiz() {
    deselectAnswers();
    quizQuestion.innerHTML = quizData[currentQuiz].question;
    option1.innerHTML = quizData[currentQuiz].a1;
    option2.innerHTML = quizData[currentQuiz].a2;
    option3.innerHTML = quizData[currentQuiz].a3;
    option4.innerHTML = quizData[currentQuiz].a4;
}
function getAnswer() {
    let answer = undefined;
    answers.forEach((li) => {
        if (li.checked) {
            answer = li.id;
        }
    })
    return answer;
}
function deselectAnswers() {
    answers.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submBtn.addEventListener('click', function () {
    let answer = getAnswer();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            reloadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You Scored ${score}/${quizData.length}!</h2>
            <button onclick="location.reload()" >Reload</button>`
        }
    }
})