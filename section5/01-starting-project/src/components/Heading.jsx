import image from '../assets/investment-calculator-logo.png'
export default function Heading()
{
  return (
    <header id="header">
      <img src={image} alt="bags of money" />
      <h1>React Investment Calculator</h1>
    </header>
  )
}