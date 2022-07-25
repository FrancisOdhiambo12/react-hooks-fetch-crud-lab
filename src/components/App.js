import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => {
      setQuestions(data)
    })
  }, [])

  function addQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(id) {
    const updateQuestion = questions.filter((question) => {
      return question.id !== id
    })
    setQuestions(updateQuestion)
  }

  function updateQuestion(updatedQuestion) {
    setQuestions((questions) => {
      return questions.map((question) => {
        if (question.id === updatedQuestion.id) {
          return updatedQuestion
        } else {
          return question
        }
      })
    })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={addQuestion}/> : <QuestionList questions={questions} setQuestions={setQuestions} onDeleteQuestion={deleteQuestion} 
      updateQuestion={updateQuestion}/>}
    </main>
  );
}

export default App;


