import Heading from "./components/Heading"
import UserInput from "./components/UserInput"
import Table from "./components/Table"
import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, 
    annualInvestment: 1200, 
    expectedReturn: 6, 
    duration: 10
  })

  const inputIsValid = userInput.duration > 0

  function handleChange(value, dataName) {
    setUserInput((oldState) => {
      return {
        ...oldState, [dataName]: +value
      } 
    })
  }
  
  return (
    <>
      <Heading />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Table userInput={userInput} />}
    </>
    
  )
}

export default App
