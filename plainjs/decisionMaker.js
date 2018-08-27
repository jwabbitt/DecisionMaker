//Fun Practice

let titleClick = document.getElementById("changeTitle");

titleClick.addEventListener("click", event => {

  title = document.getElementById("appTitle");

  if(title.classList.contains("inactive")) {
    title.classList.replace("inactive", "active");
  } else {
    title.classList.replace("active", "inactive");
  };

});

//Adding questions ---------------------------------------------------

let addQuestionButton = document.getElementById("addQuestionButton");

addQuestionButton.addEventListener("click", event => addQuestion());

addQuestionData.addEventListener("keydown", event =>{
  if(event.key === "Enter") {
    addQuestion();
  }
});

let button = document.getElementsByName("button");

let questions = [];

let addQuestion = function(newQuestion) {
  var newQuestion = document.getElementById("addQuestionData");
  if(newQuestion.value) {
    questions.push(newQuestion.value);
    printQuestions();
  } else {
    printQuestions();
  }
  newQuestion.value = '';
}

let printQuestions = function (questionList) {
  let questionListData = '<ul>';

  if(questionsList) {
    questions.forEach(function(question) {
      questionListData += '<li>' + question + '</li>';
    });

    questionListData += '</ul>';

    console.log("List o' questions: " + questionListData);

    document.getElementById("questionsList").innerHTML = questionListData;
  }

}

printQuestions(questions);
