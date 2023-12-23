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

      <div className="result-title" style={{marginTop:"15px", marginBottom:"15px", fontSize:"1.4rem"}}><h2>QUIZ <text style={{color:"#FF9900"}}>RESULT</text></h2></div>
      <div classNmame="result-score-table" style={{display: "flex", flexDirection:"row", height:"200px", flex:"space-between"}}>
        <div style={{display:"flex", flexDirection:"column", flex: "1"}}>
          <div style={{backgroundColor: "#252F3E", padding:"20px", color:"white", margin:"10px", marginTop:"-10px", textAlign:"center", borderRadius:"8px 8px 0px 0px", fontSize:"50px"}}> {`${result.filter(item => item.isCorrect).length}/${totalQuestions}`}</div>
          <div style={{backgroundColor: "#ff9900", padding:"20px", color:"white", margin:"10px", marginTop:"-10px", textAlign:"center", borderRadius:"0px 0px 8px 8px", fontSize:"1.1 rem", height:"40px"}}>Overall Score</div>
        </div>
        <div style={{display:"flex", flexDirection:"column", flex: "1"}}>
          <div style={{backgroundColor: "#252F3E", padding:"20px", color:"white", margin:"10px", marginTop:"-10px", textAlign:"center", borderRadius:"8px 8px 0px 0px", fontSize:"50px"}}>{`${totalQuestions - userAnswers.length}`}</div>
          <div style={{backgroundColor: "#ff9900", padding:"20px", color:"white", margin:"10px", marginTop:"-10px", textAlign:"center", borderRadius:"0px 0px 8px 8px", fontSize:"1.1 rem", height:"40px"}}>Unattended Questions</div>
        </div>
        <div style={{display:"flex", flexDirection:"column", flex: "1"}}>
          <div style={{backgroundColor: "#252F3E", padding:"20px", color:"white", margin:"10px", marginTop:"-10px", textAlign:"center", borderRadius:"8px 8px 0px 0px", fontSize:"50px"}}> {`${userAnswers.length}`}</div>
          <div style={{backgroundColor: "#ff9900", padding:"20px", color:"white", margin:"10px", marginTop:"-10px", textAlign:"center", borderRadius:"0px 0px 8px 8px", fontSize:"1.1 rem", height:"40px"}}>Attended Questions</div>
        </div>
      </div>
      <div className='result-report-table'>
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
    </div>
  );
};

export default QuizResult;
