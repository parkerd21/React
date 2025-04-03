export default function UserInput({userInput, handleChange}) {
  // const { initialInvestment, annualInvestment, expectedReturn, duration } = data

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(event) => handleChange(event.target.value, 'initialInvestment')}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(event) => handleChange(event.target.value, 'annualInvestment')}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event) => handleChange(event.target.value, 'expectedReturn')}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(event) => handleChange(event.target.value, 'duration')}/>
        </p>
      </div>
    </section>
  )
}