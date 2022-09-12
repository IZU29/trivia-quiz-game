import React from "react"
import Home from './Home'
import Quiz from './Quiz'
import { nanoid } from "nanoid"
export default function App(){
  const [page , setPage ] = React.useState(true)
  const [quiz , setQuiz] = React.useState([])
  function change(){
    setPage(prev => !prev)
    
  }   
  React.useEffect(() => {
    async function Question(){ 
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple')
    const data = await response.json()
    setQuiz(data.results)}
      Question()
  }, [])
  
  return (
    <div className="quiz">
      
     {page ? <Home 
        change= {() => change()}
      />:<Quiz quiz = {quiz} key={nanoid()}/>}  
    </div>
  )
}