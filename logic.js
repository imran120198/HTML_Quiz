var questionBank = [
  {
    question:
      " What is the purpose of the <track> tag, and when should it be used?",
    options: [
      "The track tag is used for specifying subtitles. It is typically applied as a child of the audio and video tags.",
      "The track tag is used for specifying subtitles. It is typically applied as a child of the video tag.",
      "The track tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the video tag.",
      "The track tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the audio and video tag.",
    ],
    answer:
      "The track tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the audio and video tag.",
  },
  {
    question: " When is the link tag used",
    options: [
      "when linking style sheets, JavaScript, and icons for mobile apps",
      "when linking style sheets, favicons, and preloading assets",
      "when linking one webpage to another",
      "when linking style sheets, external URLs, and favicons",
    ],
    answer: "when linking style sheets, favicons, and preloading assets",
  },
];

// Reading the tag
var questionContainer = document.getElementById("question_container");
var quizContainer = document.getElementById("quiz_container");
var questions = document.getElementById("questions");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var para = document.querySelectorAll("span");
var next = document.getElementById("next")

var i = 0;

for (var a = 0; a < para.length; a++) {
  para[a].style.background = "none";
}

function displayQuiz() {
  questions.innerHTML = "Q." + (i + 1) + " " + questionBank[i].question;
  option1.innerHTML = questionBank[i].options[0];
  option2.innerHTML = questionBank[i].options[1];
  option3.innerHTML = questionBank[i].options[2];
  option4.innerHTML = questionBank[i].options[3];
}

displayQuiz();

next.addEventListener("click", () => {
  if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuiz();
    }
})