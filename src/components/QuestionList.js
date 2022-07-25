import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, updateQuestion}) {

  const listOfQuestions = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} updateQuestion={updateQuestion}/>
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listOfQuestions}</ul>
    </section>
  );
}

export default QuestionList;