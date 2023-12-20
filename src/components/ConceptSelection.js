// src/components/ConceptSelection.js
import React from 'react';
import './ConceptSelection.css';

const ConceptSelection = ({ concepts, onSelectConcept }) => {
  return (
    <div className="concept-selection">
      {/* Heading container */}
      <div className='heading-container'>
        <h1>AWS Practice Quiz</h1>
      </div>

      {/* Concepts list */}
      <div className="concepts-list">
        {/* Mapping through concepts and displaying each one */}
        {concepts.map((concept, index) => (
          <div className='concept-item'  key={index}>
            {/* Concept item details */}

              <td style={{border:"none", fontSize:"1rem"}} className='concept-title'>{index + 1}. {concept.displayName}</td>
              <td style={{border:"none", fontSize:"1rem", width:"30%"}} className='concept-button'>
                {/* Button to take the quiz for the selected concept */}
                <button className='take-quiz-button' onClick={() => onSelectConcept(concept)}>TAKE QUIZ</button>
                
              </td>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptSelection;
