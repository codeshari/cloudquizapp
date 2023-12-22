// src/App.js
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
// import AWSConceptSelection from './components/AWSConceptSelection';
// import Quiz from './components/Quiz';
// import QuizResult from './components/QuizResult';

import './App.css';

// import conceptsData from './data/concept.json'; // Adjust the path accordingly
import CloudSelection from './components/CloudSelection';
import Layout from './components/Layout';

const App = () => {
  // const [concepts, setConcepts] = useState([]);
  // const [selectedConcept, setSelectedConcept] = useState(null);
  // const [questions, setQuestions] = useState([]);
  // const [showResult, setShowResult] = useState(false);

  // useEffect(() => {
  //   // Load concepts from the imported data
  //   setConcepts(conceptsData);
  // }, []);

  // const handleConceptSelection = (concept) => {
  //   setSelectedConcept(concept);

  //   // Load quiz data dynamically based on the selected concept name
  //   import(`./data/${concept.fileName}.json`)
  //     .then((quizData) => setQuestions(quizData.default))
  //     .catch((error) => console.error('Error loading quiz data:', error));

  //   setShowResult(false);
  // };

  // const handleFinishQuiz = () => {
  //   setShowResult(true);
  // };

  // if (concepts.length === 0) {
  //   return <p>Loading...</p>;
  // }



  return (
    <div>
     
      <Layout>
      <div><CloudSelection/></div>
      </Layout>
      

    </div>
  );
};

export default App;