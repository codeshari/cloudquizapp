import React, { useState, useEffect } from 'react';
import ScorePopup from './ScorePopup';
import QuizResult from './QuizResult';
import './Quiz.css';

const Quiz = ({ questions, onConceptChange }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions?.length).fill(null));
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [timer, setTimer] = useState(30 * questions.length); // 30 seconds per question
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Reset the timer when the component mounts or when the concept changes
    setTimer(30 * questions.length);
    setQuizFinished(false);
  }, [questions, onConceptChange]);

  useEffect(() => {
    // Set up a timer to decrease every second
    const timerInterval = setInterval(() => {
      if (!quizFinished) {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }
    }, 1000);

    // Clear the timer interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [quizFinished]);

  const handleAnswerClick = (isCorrect, answerIndex) => {
    if (questions && answerIndex >= 0 && answerIndex < questions[currentQuestion]?.answers.length) {
      if (isCorrect) {
        setScore(score + 1);
      }
      setUserAnswers([...userAnswers.slice(0, currentQuestion), answerIndex, ...userAnswers.slice(currentQuestion + 1)]);
    }
  };

  const handleNext = () => {
    // Check if the current question has been answered
    if (userAnswers[currentQuestion] !== null) {
      setCurrentQuestion(currentQuestion + 1);
    }
    // No else block is needed; the function will return if the condition is not met
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers(Array(questions?.length).fill(null));
    setShowScorePopup(false);
    setShowReport(false);
  };

  const showQuizReport = () => {
    calculateScore();
    setShowReport(true);
    setQuizFinished(true); // Set quizFinished to true when the quiz is finished
  };

  const calculateScore = () => {
    // Add any additional scoring logic here if needed
  };

  const calculateProgress = () => {
    const answeredQuestions = userAnswers.filter((answer) => answer !== null).length;
    const progress = (answeredQuestions / questions.length) * 100;
    return progress;
  };

  if (!questions || questions.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="quiz-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${calculateProgress()}%` }}></div>
      </div>
      <div className="timer-container">
        <p>Time Left: {Math.floor(timer / 60)}:{(timer % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</p>
      </div>
      {showReport ? (
        <QuizResult questions={questions} userAnswers={userAnswers} totalQuestions={questions.length} />
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
            <div className="qno-container">{currentQuestion + 1} / {questions.length}</div>
            <div className="button-container">
              {currentQuestion > 0 && <button onClick={handlePrevious}>Previous</button>}
            </div>
          </div>
          <div>
            <p>{questions[currentQuestion]?.question}</p>
            <ul>
              {questions[currentQuestion]?.answers.map((answer, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerClick(answer.isCorrect, index)}
                  className={`answer-option ${
                    userAnswers[currentQuestion] === index ? 'selected' : 'unselected'
                  }`}
                >
                  {answer.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="right-button-container">
            {currentQuestion < questions.length - 1 && (
              <button onClick={handleNext} disabled={userAnswers[currentQuestion] === null}>
                Next
              </button>
            )}
          </div>
          {currentQuestion === questions.length - 1 && (
            <div className="right-button-container">
              <button className='nextButton' onClick={showQuizReport}>Finish</button>
            </div>
          )}
        </>
      )}
      {showScorePopup && (
        <ScorePopup score={score} totalQuestions={questions.length} onReset={resetQuiz} />
      )}
    </div>
  );
};

export default Quiz;
