const themesHeader = document.querySelector('.themes__list');
const themesItems = document.querySelectorAll('.themes__link');
const quizContents = document.querySelectorAll('.quiz-wrp');

function hideContent() {
    quizContents.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    themesItems.forEach((item) => {
        item.classList.remove('bold');
    });
}


function showContent(i = 0) {
    quizContents[i].classList.add('show');
    quizContents[i].classList.remove('hide');
    themesItems[i].classList.add('bold');
}


hideContent();
showContent();


themesHeader.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('themes__link')) {
        themesItems.forEach((item, i) => {
            if (item == target) {
                hideContent();
                showContent(i);
            }
        });
    }
});







const quizData = [{
        question: "Первый вопрос?",
        a: "ответ 1",
        b: "ответ 2",
        c: "ответ 3",
        d: "ответ 4",
        correct: "d",
    },
    {
        question: "Второй вопрос?",
        a: "ответ 1",
        b: "ответ 2",
        c: "ответ 3",
        d: "ответ 4",
        correct: "d",
    },
    {
        question: "Третий вопрос?",
        a: "ответ 1",
        b: "ответ 2",
        c: "ответ 3",
        d: "ответ 4",
        correct: "d",
    },
    {
        question: "Четвёртый вопрос?",
        a: "ответ 1",
        b: "ответ 2",
        c: "ответ 3",
        d: "ответ 4",
        correct: "d",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})