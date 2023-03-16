import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Increment = options => {
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
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }



  render() {

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.Increment} />
        </Section>

        <Section title="Statistics">

          {this.countTotalFeedback() > 0 ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            /> :
            <Notification message="There is no feedback" />}

        </Section>

      </div>

    )

  }


};
