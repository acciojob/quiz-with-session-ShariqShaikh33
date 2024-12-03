//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
	const questionsElement = document.getElementById('questions');
	let userAnswers = [];
    const question = questions[i];
    const questionElement = document.createElement("div");
	questionElement.setAttribute("class", "questiondivmain");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
	  const questiondiv = document.createElement("div");
	questiondiv.setAttribute("class", "questiondiv");
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
		choiceElement.setAttribute("id", choice);
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createElement("label");
		choiceText.innerHTML = choice;
		choiceText.setAttribute("for", choice);
      questiondiv.appendChild(choiceElement);
      questiondiv.appendChild(choiceText);
	  questionElement.appendChild(questiondiv);
    }
	
    questionsElement.appendChild(questionElement);
  }
	
}
renderQuestions();







