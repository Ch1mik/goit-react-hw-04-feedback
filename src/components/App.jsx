import React, { useState } from "react";
import s from './App.module.css';
import Feedback from "./Feedback/Feedback";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        throw new Error()
    }
  };
  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
  return  Math.round((good / countTotalFeedback()) * 100);
  }
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#93c5fa'
      }}
    >
      <div className={s.container}>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys({ good, neutral, bad})}
            onLeaveFeedback={onLeaveFeedback}
          />
          </Section>
          <Section title="Statistics">
            {countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
               <Notification message="There is no feedback"></Notification> 
            )}
          </Section>
        </div>
      </div>
    )
};


// return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Feedback/>
//     </div>
//   );