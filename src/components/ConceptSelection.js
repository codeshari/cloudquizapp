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
          <div key={index}>
            {/* Concept item details */}
            <div>
              <td>{index + 1}. {concept.displayName}</td>
              <td>
                {/* Button to take the quiz for the selected concept */}
                <button onClick={() => onSelectConcept(concept)}>Take Quiz</button>
                
              </td>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptSelection;
