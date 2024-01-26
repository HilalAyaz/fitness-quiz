import React, { useState } from 'react';
import Question from './Question';
import Results from './Results';
import questionsData from '../data/questions.json';
import fitnessPackagesData from '../data/fitnessPackages.json';
import '../styles/Quiz.css'; // Import your Quiz component styles

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [fitnessPackage, setFitnessPackage] = useState(null);

  const handleSelect = (option) => {
    // Update userResponses state based on the selected option
    setUserResponses([...userResponses, option]);

    // Move to the next question
    if (currentQuestionIndex < questionsData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If it's the last question, submit the quiz
      submitQuiz();
    }
  };

  const submitQuiz = () => {
    // Process userResponses and determine the fitness package
    const userFitnessGoal = userResponses[0];
    setFitnessPackage(fitnessPackagesData.fitnessPackages[userFitnessGoal]);
    setShowResults(true);
  };

  const resetQuiz = () => {
    // Reset quiz state to allow the user to retake the quiz
    setCurrentQuestionIndex(0);
    setUserResponses([]);
    setShowResults(false);
    setFitnessPackage(null);
  };

  return (
    <div className="quiz-container">
      {showResults ? (
        <Results fitnessPackage={fitnessPackage} onReset={resetQuiz} />
      ) : (
        <Question
          question={questionsData.questions[currentQuestionIndex].question}
          options={questionsData.questions[currentQuestionIndex].options}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default Quiz;
