import React from 'react';
import "../styles/Question.css"

const Question = ({ question, options, onSelect }) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
