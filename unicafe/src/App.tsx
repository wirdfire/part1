import { useState } from 'react'

const StatisticLine = ({text, value}) =>
<tr>
  <td>{text}</td><td>{value}</td>
  </tr>

const Statistics = ({good, neutral, bad})=>{
  const totalFeedback = good + neutral + bad;
  const average = (good - bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;
  if(totalFeedback === 0){
    return (
      <div>
        <h1>No feedback given</h1>
      </div>
    )
  }
  return(
    <>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="total feedback" value={totalFeedback}/>
        <StatisticLine text="average" value={average.toFixed(1)}/>
        <StatisticLine text="positive feedback" value={positivePercentage.toFixed(1)}/>
    </tbody>
    </table>
    </>
  )
}
const Button = (props)=>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }
    const handleNeutral = () => {
      setNeutral(neutral + 1)
    }
    const handleBad = () => {
      setBad(bad + 1)
    }

  return (
    <div>
    <h1>give feed back</h1>
    <Button handleClick={handleGood} text="good"/>
    <Button handleClick={handleNeutral} text="neutral"/>
    <Button handleClick={handleBad} text="bad"/>
    <Statistics good={good} neutral={neutral} bad={bad} />
</div>
  )
}
export default App