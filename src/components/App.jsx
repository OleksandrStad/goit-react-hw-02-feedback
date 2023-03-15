import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/Feedback'
import { Statistics } from './Statistics/Statistics'



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // positive feedback: 0,
  };

  Increment = options => {
    console.log(options)
    this.setState(prevState => {
      return {
        [options]: prevState[options] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage() {
    return this.state.good / this.countTotalFeedback() * 100
  }



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
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          Positive={this.countPositiveFeedbackPercentage()}
        />


      </div>

    )

  }


};
