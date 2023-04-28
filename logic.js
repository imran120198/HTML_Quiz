var questionBank = [
  {
    question:
      " What is the purpose of the <track> tag, and when should it be used?",
    options: [
      "The <track> tag is used for specifying subtitles. It is typically applied as a child of the <audio> and <video> tags.",
      "The <track> tag is used for specifying subtitles. It is typically applied as a child of the <video> tag.",
      "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <video> tag.",
      "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag.",
    ],
    answer:
      "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag.",
  },
  {
    question: "What are the best examples of void elements?",
    options: [
      "<link><meta><title>",
      "<br><base><source>",
      "<input><br><p>",
      "<area><embed><strong></strong>",
    ],
    answer: "<br><base><source>",
  },
];

var questionContainer = document.getElementById("question_container");
var quizContainer = document.getElementById("quiz_container");
var questions = document.getElementById("questions");

function displayQuiz() {}

displayQuiz();
