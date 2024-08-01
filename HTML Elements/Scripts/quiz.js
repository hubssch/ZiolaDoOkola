const quizQuestions = [
    {
        question: "Co to jest fitoterapia?",
        answers: [
            "Terapia z wykorzystaniem owoców",
            "Leczenie przy użyciu roślin i ziół",
            "Terapia z wykorzystaniem wody",
            "Terapia z użyciem minerałów"
        ],
        correct: "B"
    },
    {
        question: "Jakie zioło jest najczęściej używane do leczenia problemów trawiennych?",
        answers: [
            "Melisa",
            "Mięta pieprzowa",
            "Rumianek",
            "Lawenda"
        ],
        correct: "B"
    },
    {
        question: "Które zioło jest znane ze swoich właściwości uspokajających?",
        answers: [
            "Echinacea",
            "Kawa",
            "Melisa",
            "Imbir"
        ],
        correct: "C"
    },
    {
        question: "Które zioło jest często używane do wspomagania układu odpornościowego?",
        answers: [
            "Szałwia",
            "Echinacea",
            "Tymianek",
            "Mięta"
        ],
        correct: "B"
    },
    {
        question: "Jakie zioło jest znane ze swoich właściwości przeciwbakteryjnych i przeciwgrzybiczych?",
        answers: [
            "Aloes",
            "Kurkuma",
            "Czosnek",
            "Bazylia"
        ],
        correct: "C"
    },
    {
        question: "Która z roślin jest znana jako naturalny środek na ból głowy?",
        answers: [
            "Rozmaryn",
            "Lawenda",
            "Mięta pieprzowa",
            "Szałwia"
        ],
        correct: "C"
    },
    {
        question: "Jakie zioło jest powszechnie stosowane w leczeniu przeziębień i grypy?",
        answers: [
            "Mięta",
            "Echinacea",
            "Bazylia",
            "Melisa"
        ],
        correct: "B"
    },
    {
        question: "Które zioło jest używane do łagodzenia stresu i poprawy snu?",
        answers: [
            "Lawenda",
            "Mięta pieprzowa",
            "Tymianek",
            "Szałwia"
        ],
        correct: "A"
    },
    {
        question: "Która roślina jest znana z właściwości przeciwzapalnych?",
        answers: [
            "Rumianek",
            "Kurkuma",
            "Eukaliptus",
            "Mięta"
        ],
        correct: "B"
    },
    {
        question: "Która z roślin jest często używana do wspomagania trawienia?",
        answers: [
            "Aloes",
            "Imbir",
            "Lawenda",
            "Rumianek"
        ],
        correct: "B"
    },
    {
        question: "Co to jest macerat olejowy?",
        answers: [
            "Olej z pierwszego tłoczenia",
            "Ekstrakt z roślin rozpuszczony w alkoholu",
            "Zioła namoczone w oleju w celu wyciągnięcia składników aktywnych",
            "Roztwór wodny z ziół"
        ],
        correct: "C"
    },
    {
        question: "Jakie zioło jest stosowane w leczeniu problemów skórnych, takich jak trądzik?",
        answers: [
            "Mięta",
            "Aloes",
            "Rumianek",
            "Nagietek"
        ],
        correct: "B"
    },
    {
        question: "Która roślina jest znana ze swoich właściwości przeciwutleniających?",
        answers: [
            "Mięta pieprzowa",
            "Echinacea",
            "Zielona herbata",
            "Lawenda"
        ],
        correct: "C"
    },
    {
        question: "Jakie zioło jest znane jako naturalny środek na problemy z wątrobą?",
        answers: [
            "Mniszek lekarski",
            "Rumianek",
            "Tymianek",
            "Mięta"
        ],
        correct: "A"
    },
    {
        question: "Która roślina jest często stosowana do poprawy krążenia krwi?",
        answers: [
            "Imbir",
            "Rozmaryn",
            "Szałwia",
            "Lawenda"
        ],
        correct: "A"
    },
    {
        question: "Jak należy przygotować napar z mięty pieprzowej?",
        answers: [
            "Zagotować wodę i dodać świeże lub suszone liście mięty, parzyć przez 10 minut",
            "Zagotować wodę i dodać nasiona mięty, parzyć przez 5 minut",
            "Zalać zimną wodą i odstawić na 24 godziny",
            "Mieszać z sokiem z cytryny i pić na zimno"
        ],
        correct: "A"
    },
    {
        question: "Jakie zioło można dodać do kąpieli w celu relaksacji i złagodzenia napięcia mięśni?",
        answers: [
            "Lawenda",
            "Kurkuma",
            "Echinacea",
            "Tymianek"
        ],
        correct: "A"
    },
    {
        question: "Które zioło jest popularne w kuchni śródziemnomorskiej i ma również właściwości lecznicze?",
        answers: [
            "Rozmaryn",
            "Rumianek",
            "Melisa",
            "Aloes"
        ],
        correct: "A"
    },
    {
        question: "Jakie są główne zastosowania rumianku w medycynie naturalnej?",
        answers: [
            "Leczenie bólu głowy i poprawa pamięci",
            "Łagodzenie stanów zapalnych i wspomaganie trawienia",
            "Poprawa krążenia i wzmacnianie kości",
            "Leczenie chorób układu oddechowego i zwiększanie energii"
        ],
        correct: "B"
    },
    {
        question: "Jakie zioło jest często używane w formie olejku eterycznego do aromaterapii?",
        answers: [
            "Szałwia",
            "Mięta pieprzowa",
            "Lawenda",
            "Echinacea"
        ],
        correct: "C"
    }
];

function createQuiz() {
    const quizContainer = document.getElementById('pytania');

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('pytanie');

        const questionP = document.createElement('p');
        questionP.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionP);

        q.answers.forEach((answer, i) => {
            const answerLabel = document.createElement('label');
            const answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = `q${index + 1}`;
            answerInput.value = String.fromCharCode(65 + i);
            answerLabel.appendChild(answerInput);
            answerLabel.appendChild(document.createTextNode(` ${String.fromCharCode(65 + i)}. ${answer}`));
            answerLabel.appendChild(document.createElement('br'));
            questionDiv.appendChild(answerLabel);
        });

        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Sprawdź odpowiedzi';
    submitButton.onclick = (e) => {
        e.preventDefault();
        checkAnswers();
    };
    quizContainer.appendChild(submitButton);
}

function checkAnswers() {
    let score = 0;
    const totalQuestions = quizQuestions.length;

    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });

    const percentage = (score / totalQuestions) * 100;
    let comment = "";

    if (percentage === 100) {
        comment = "Gratulacje, jesteś już zaawansowanym zielarzem!";
    } else if (percentage >= 80) {
        comment = "Nieźle, wiesz już całkiem sporo.";
    } else if (percentage >= 60) {
        comment = "Dobra robota, chcesz dowiedzieć się więcej?";
    } else if (percentage >= 30) {
        comment = "Super, przed Tobą magiczna ziołowa przygoda.";
    } else {
        comment = "Nie martw się, każda przygoda zaczyna się od pierwszego kroku.";
    }

    document.getElementById('quiz-container').classList.add('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');
    
    document.getElementById('result').textContent = `Twój wynik: ${score} na ${totalQuestions} poprawnych odpowiedzi (${percentage}%).`;
    document.getElementById('comment').textContent = comment;
}

window.onload = createQuiz;
