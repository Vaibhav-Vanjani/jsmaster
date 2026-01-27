import { useState } from "react"
import { list } from "./components/jsmaster/questions"

function App() {
  const [questionId,setQuestionId] = useState(1);
  return (
    <>
      {
        list.filter((question)=>questionId===+question.id).map((question)=>{
         return <section key={question.id}>
            <h2>Question::{" " + question.id}</h2>
            <h3>{question.question}</h3>
            <div>{question.snippet}</div>
            <div>
              <input type="radio" name={question.id} value={"A"}></input>
              <label>A:</label>

              <input type="radio" name={question.id} value={"B"}></input>
              <label>B:</label>
              
              <input type="radio" name={question.id} value={"C"}></input>
              <label>C:</label>
              
              <input type="radio" name={question.id} value={"D"}></input>
              <label>D:</label>
            </div>
            {questionId !== 1 && <button onClick={()=>setQuestionId(prev=>prev-1)}>Prev</button>}
            {questionId !== list.length && <button onClick={()=>setQuestionId(prev=>prev+1)}>Next</button>}
          </section>
        })
      }
    </>
  )
}

export default App
