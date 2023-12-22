// src/components/OracleHome.js

import React, { useState, useEffect } from 'react';
import conceptsData from '../data/concepts/oracleconcepts.json'; // Adjust the path accordingly
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import OracleConceptSelection from './OracleConceptSelection';

const OracleHome = () => {
    const [concepts, setConcepts] = useState([]);
    const [selectedConcept, setSelectedConcept] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        // Load concepts from the imported data
        setConcepts(conceptsData);
    }, []);

    const handleConceptSelection = (concept) => {
        setSelectedConcept(concept);

        // Load quiz data dynamically based on the selected concept name
        import(`../data/${concept.fileName}.json`)
            .then((quizData) => setQuestions(quizData.default))
            .catch((error) => console.error('Error loading quiz data:', error));

        setShowResult(false);
    };

    const handleFinishQuiz = () => {
        setShowResult(true);
    };

    if (concepts.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="content-container">
                {selectedConcept && !showResult ? (
                    <Quiz questions={questions} conceptName={selectedConcept.name} concept={selectedConcept} onFinishQuiz={handleFinishQuiz} />
                ) : showResult ? (
                    <QuizResult questions={questions} userAnswers={[]} totalQuestions={questions.length} />
                ) : (
                    <OracleConceptSelection concepts={concepts} onSelectConcept={handleConceptSelection} />
                )}
            </div>
        </div>
    );
};

export default OracleHome;
