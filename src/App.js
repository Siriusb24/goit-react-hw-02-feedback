import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import './App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = event =>{
    const value = event.target.textContent
     
    this.setState(prevState => ( {[value]: prevState[value] += 1}))
    //console.log(this.state)
    //console.log(event)
  }
  
  
  render(){
    const { good, neutral, bad } = this.state;
    //console.log(Object.keys(this.state))
   return(
   <>
    <FeedbackOptions options = {this.state} onLeaveFeedback={this.onLeaveFeedback}/>
    <Statistics good={good} bad={bad} neutral={neutral}/>
  </>
  )
}
}
