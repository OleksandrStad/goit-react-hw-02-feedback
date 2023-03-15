import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/Feedback'
import { Statistics } from './Statistics/Statistics'



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  Increment = options => {
    console.log(options)
    this.setState(prevState => {
      return {
        [options]: prevState[options] + 1,
      };
    });
  };

  // Increment = ({ good, neutral }) => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //       // neutral: prevState.neutral + 1,
  //     }
  //   });




  render() {
    // const { good, neutral, bad } = this.state;


    return (
      <div>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.Increment} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad} />


      </div>

    )

  }


};
