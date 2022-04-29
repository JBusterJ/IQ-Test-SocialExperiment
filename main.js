const firebaseConfig = {
    apiKey: "AIzaSyA-eAVO5sLKjIdbaZhkUKtfHKepwRzJa7s",
    authDomain: "mathematical-society-6013a.firebaseapp.com",
    projectId: "mathematical-society-6013a",
    storageBucket: "mathematical-society-6013a.appspot.com",
    messagingSenderId: "723988777605",
    appId: "1:723988777605:web:4a9800258ef288f0d537ec",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

var totalTestTime = new Timer();
totalTestTime.stop();

var timer = new Timer();
timer.stop();

// document.getElementById("age").addEventListener("change", function () {
//     console.log("Entered date:", document.getElementById("age").value, moment(document.getElementById("age").value).isAfter(moment("2008-1-1")))
//     var age = document.getElementById("age").value;

//     if (moment(age).isAfter(moment("2007-1-1")) && moment(age).isBefore(moment("2015-1-1"))) {
//         console.log("Valid DOB!");
//         parent = document.getElementById("confirmation-begin");
//         parent.innerHTML = "";
//         beginButton = document.createElement("button");
//         beginButton.innerHTML = "Begin test with an age of " + moment().to(moment(age), true);
//         beginButton.addEventListener("click", function () {
//             var cont = confirm("Are you sure you would like to continue with this operation?\nAfter confirmation, your browser screen will go into a fullscreen window, and exiting this window will terminate the test.");
//             if (cont) {
//                 document.getElementById("descriptions").innerHTML = "";
//                 anticheat();
//                 document.getElementById("test").style.display = "block";
//                 totalTestTime.start();
//                 nextQuestion();
//             }
//             return 0;
//         });
//         parent.appendChild(beginButton);
//     }
// });
katex.render(String.raw`e = \pm0.00032858`, document.getElementById("moe"), {
    throwOnError: false
});

function exitHandler() {
    if (!document.body.webkitIsFullScreen && !document.body.mozFullScreen && !document.body.msFullscreenElement) {
        console.log("I would say you were cheating if this wasn't a buggy anticheat.")
    }
}

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
    document.addEventListener('fullscreenchange', exitHandler, false);
}

testFinished = false;

function anticheat() {
    document.addEventListener("mouseleave", (event) => {
        if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
            changeStatus(false);
        }
    }); // check if mouse leaves the screen

    requestFullScreen(document.body);


    var onpage = true;
    var warnings = 0;

    function changeStatus(bool) {
        onpage = bool;
        console.log(bool);
        if (!onpage && warnings < 2 && !testFinished) {
            warnings++;
            alert("Please do not take your mouse out of this screen. You have been given a warning (" + warnings + "/2)")
        }
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams.get('age_group'))
db.collection(urlParams.get('age_group'))

var questionIndex = -1;

var questions = [
    '<p>Q1. Expand (a+b)^2 to the fullest. (^2 is the equivalent of squared, if your answer was b squared plus 1, enter it as b^2 + 1). Order your expression such that it is alphabetically ordered and all variables with an exponent value will be put towards the left eg(c^23+b^3+123)</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q2. What comes next in this series? <br>1-1-2-3-5-8-13-21-34-55-?</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q3. Find the intersection two lines with equations of y=x and y=3x. Enter answer as a coordinate pair (x, y).</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q4. The area of a square is 100 cm^2.If the length of each side is decreased by 20%, then the area of the new square in cm^2 is</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q5. Chocolates are 17c each, and sweets are 5c each. What number of each can be bought to spend exactly $1? Answer as n and p</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q6. If<br><br>ISH YEP DID means pay the bill<br>ISH DID NIT means pay the loan<br>DID NIS HA means the green grass<br><br>What is the word for pay? Enter word in capitals.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q7. In a hurdle in which only 3 students out of 5 are able to pass a math exam, determined by who scores the highest, Nick, Noah, Fiona, Joseph and Alex all attempt this exam.Fiona scores higher than Alex and Joseph while Nick beats Noah by 2 marks but loses to Fiona.Noah beats Joseph by 5 marks while Joseph lost to Alex by 4 marks. Which two students did not pass the hurdle? Enter in the format Name and Name (first letter capitalized)</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q8. Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother? Enter age as a number with no succeeding or preceding units of measurement.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q9. Which of the following is synonym for the word obfuscate? {Cautious, Courageous, Confess, Confuse, None of these}. Pick an answer from the list, answer with precise spelling and capitalizations.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q10. If the circumference of the rim of a cylindrical drinking glass is 18 cm, what would be the area, in cm^2, enclosed by the rim ? Take π(pi) = 3. Answer without units.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q11. The average of four integer data points is 21. If a fifth data point, 16, is included, what is the new average? Enter answer as the new average.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q12. I died for beauty, but was scarce<br>Adjusted in the tomb,<br>When one who died for truth was lain<br>In an adjoining room.<br><br><br>He questioned softly why I failed?<br>"For beauty," I replied.<br>"And I for truth - the two are one;<br>We brethren are," he said.<br>And so, as kinsmen met a-night,<br>We talked between the rooms,<br>Until the moss had reached our lips,<br>And covered up our names.<br><br><br>“Until the moss had reached our lips” (line 11). In the poem, the moss is a metaphor for:</p> {Ending, Nature, Monster, Grass, None of these}. Pick one of the options from the list and answer with precisely the same spelling and capitalizations.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q13. ax^2+bx+c is a _ degree polynomial. Answer without the number suffix (eg. without the rd in 3rd)</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q14. (-b+-sqrt(b^2-4ac))/2a is the well known formula for solving ____nomials. Enter answer in all lowercase letters.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="nextQuestion()">Next question</button>',
    '<p>Q15. Finish this sequence: 1, 8, 27, 64, ___. Enter the answer as an integer.</p><input type="text" placeholder = "Enter answer here..." id="answerBox"><br><p>Remember that you cannot return to questions once you have submitted them... please double check your answer before submitting!</p><br><button onclick="finishTest()">Finish</button>'
];

var correctAnswers = [
    "a^2+b^2+2ab",
    "89",
    "(0, 0)",
    "64",
    "5 and 3",
    "ISH",
    "Joseph and Fiona",
    "24",
    "Confuse",
    "27",
    "20",
    "Ending",
    "2",
    "tri",
    "125"
];

var userAnswers = [];
var answerCorrectAmount = 0;

function nextQuestion() {
    if (questionIndex > -1) {
        timer.pause();
        db.collection(urlParams.get('age_group')).doc(`questionIndex${questionIndex}`).set({
            userAnswer: document.getElementById('answerBox').value,
            correctAnswer: correctAnswers[questionIndex],
            isCorrect: document.getElementById('answerBox').value.toString() === correctAnswers[questionIndex],
            timeTaken: timer.getTimeValues().toString()
        });
        if (document.getElementById('answerBox').value.toString() === correctAnswers[questionIndex]) {
            answerCorrectAmount++;
        }
        userAnswers.push(document.getElementById("answerBox").value);
        timer.start();
        timer.stop(); // timer.reset() is not working, so I have to improvise
    }
    questionIndex++;
    if (questionIndex != questions.length) {
        timer.start();
        document.getElementById("test").innerHTML = "";
        targetdiv = document.createElement("div");
        document.getElementById("test").appendChild(targetdiv);
        targetdiv.insertAdjacentHTML('afterend', questions[questionIndex]);
    }
}

function finishTest() {
    userAnswers.push(document.getElementById("answerBox").value);
    testFinished = true;
    if (document.getElementById("answerBox").value === correctAnswers[questionIndex]) {
        answerCorrectAmount++;
    }
    db.collection(urlParams.get('age_group')).doc(`finalReport`).set({
        totalQuestions: questions.length,
        totalCorrect: answerCorrectAmount,
        totalTestTime: totalTestTime.getTimeValues().toString(),
        estimatedIQReal: (((answerCorrectAmount / questions.length) * 100) * (1.2 * totalTestTime.getTimeValues().seconds / 70)) * 2,
        givenFakeIQ: ((((answerCorrectAmount / questions.length) * 100) * (1.2 * totalTestTime.getTimeValues().seconds / 140)) * 2) - 10
    });
    var displayedIQ = ((((answerCorrectAmount / questions.length) * 100) * (1.2 * totalTestTime.getTimeValues().seconds / 140)) * 2) - 10;
    if (displayedIQ < 0) {
        displayedIQ = 0;
    }

    alert(`Your answers to the questions were [${userAnswers}]\nFor the sake of keeping answers to the test secret, we are unable to show you the correct answers for the test. With this being said, you have an estimated IQ of ${displayedIQ} with a margin of error of less than a quadrillionth.`);
    document.getElementById("descriptions").innerHTML = "";
    document.getElementById("test").innerHTML = "";
    dummy = document.createElement("span");
    document.getElementById("descriptions").appendChild(dummy);
    dummy.insertAdjacentHTML('afterend', `<h1 id='title' style="color: rgb(255, 211, 117)">Thank you for taking the test!</h1><h5>You are one of the <b id='usercountaccurate'>32 million</b> users who have accessed this IQ test. This IQ test initially served the purpose of being a practice IQ test, but over time, more and more individuals accessed this IQ test, contributing to increasing the precision of IQ calculations and refining questions, allowing for a much more accurate calculation of IQ for gifted test-takers. Without you, we wouldn't be where we are today!</h5><br><p>As stated previously, your has been measured to be ${displayedIQ}. Although this score may not seem like much, you are marginally close to the average score, with the average score for 12-16 year olds being a whopping 112 IQ points (${displayedIQ} points off).<br>Your IQ score is located in the bottom 50% of the world average.<br>Are you looking to strive for higher intelligence? Well, to inspire you, the highest IQ score recorded and measured by exact this IQ test (on our previous test domain, <a href='https://www.mensa.org/'>https://www.mensa.org/</a>) was a 177.231443543 - about 50 IQ points from the highest recorded IQ score in the world!</p><br>Although not accurate, this image can be a decent referencing tool for IQ classifying <br><br><img src='https://www.free-iqtest.net/images/iq-scale.png' style='width: 750px;'>`);
}

// 15 / 15 * 100 * (1.2 * 120 / 180)
// 480
