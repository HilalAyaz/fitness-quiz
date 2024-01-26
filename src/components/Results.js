import React from 'react';
import '../styles/Results.css'; 

const Results = ({ fitnessPackage, onReset }) => {
  return (
    <div className="results-container">
      <h2>Recommended Fitness Package:</h2>
      {fitnessPackage ? (
        <div>
          <h3>Activities:</h3>
          <ul>
            {fitnessPackage.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          {fitnessPackage.additionalInfo && (
            <p>{fitnessPackage.additionalInfo}</p>
          )}
        </div>
      ) : (
        <p>No fitness package available</p>
      )}
      <button onClick={onReset}>Retake Quiz</button>
    </div>
  );
};

export default Results;
