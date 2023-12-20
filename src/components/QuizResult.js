// src/components/QuizResult.js
import React from 'react';
import './QuizResult.css';

const QuizResult = ({ questions, userAnswers, totalQuestions }) => {
    const calculateScore = () => {
        return userAnswers.map((userAnswer, index) => {
          const question = questions[index];
          const correctAnswer = question.answers.find(answer => answer.isCorrect);
      
          const isCorrect = userAnswer === question.answers.indexOf(correctAnswer);
      
          return {
            questionText: question.question,
            userAnswer: question.answers[userAnswer]?.text,
            correctAnswer: correctAnswer?.text,
            isCorrect,
          };
        });
      };
      

  const result = calculateScore();

  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>Your Overall Score: {`${result.filter(item => item.isCorrect).length}/${totalQuestions}`}</p>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index}>
              <td>{item.questionText}</td>
              <td className={item.isCorrect ? 'correct' : 'incorrect'}>{item.userAnswer}</td>
              <td>{item.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizResult;
