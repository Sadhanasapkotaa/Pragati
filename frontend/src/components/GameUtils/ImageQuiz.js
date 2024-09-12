import React, { useState, useEffect } from 'react';

const ImageQuiz = ({ question, correctAnswer, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [buttonText, setButtonText] = useState('Submit');

  // Shuffle the options on component mount or when reset
  const shuffleOptions = () => {
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  };

  useEffect(() => {
    shuffleOptions();
  }, [options]);

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Handle submit
  const handleSubmit = () => {
    if (!selectedOption) return;

    setIsAnswered(true);
    if (selectedOption.text === correctAnswer.text || selectedOption.imageSrc === correctAnswer.imageSrc) {
      setButtonText('CONTINUE');
    } else {
      setButtonText('TRY AGAIN');
    }
  };

  // Reset the quiz for "TRY AGAIN"
  const resetQuiz = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setButtonText('Submit');
    shuffleOptions(); // Reshuffle options
  };

  // Function to read aloud the question and options
  const readAloud = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = `Question: ${question}. Options are: `;
    shuffledOptions.forEach((option) => {
      if (option.text) {
        utterance.text += option.text + ', ';
      } else if (option.imageSrc) {
        utterance.text += option.altText + ', ';
      }
    });
    synth.speak(utterance);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{question}</h2>
        <button
          onClick={readAloud}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none"
        >
          Read Aloud
        </button>
      </div>

      <ul>
        {shuffledOptions.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left p-3 my-2 rounded 
                ${
                  selectedOption === option && !isAnswered
                    ? 'bg-blue-500 text-white' // Highlight selected option in blue
                    : selectedOption === option && isAnswered
                    ? option.text === correctAnswer.text || option.imageSrc === correctAnswer.imageSrc
                      ? 'bg-green-500 text-white' // Highlight correct option in green
                      : 'bg-red-500 text-white' // Highlight incorrect option in red
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              disabled={isAnswered}
            >
              {/* If the option has text, display it */}
              {option.text && <p>{option.text}</p>}

              {/* If the option has an image, display it */}
              {option.imageSrc && (
                <img
                  src={option.imageSrc}
                  alt={option.altText}
                  className="w-full h-32 object-cover rounded"
                />
              )}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={isAnswered && buttonText === 'TRY AGAIN' ? resetQuiz : handleSubmit}
        className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        disabled={!selectedOption && !isAnswered}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ImageQuiz;
