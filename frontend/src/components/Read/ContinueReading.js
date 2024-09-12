import React from 'react';

const ContinueReading = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white py-10 px-5 md:px-20 ">
      {/* Text Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-5xl font-semibold text-gray-700 mb-4 leading-snug">Do you want to <br/> Continue Reading?</h2>
        <br />
        <p className="text-gray-600 mb-6">
          Don’t know where to start? You can simply continue from the last lesson that you were reading!
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
          CHOOSE OTHER BOOK
        </button>
      </div>
      
      {/* Image & Button Section */}
      <div className="md:w-1/2 flex flex-col items-center">
        <div className="bg-blue-500 p-6 rounded-lg text-center w-full max-w-sm">
          <img
            src="https://via.placeholder.com/220x150"
            alt="Illustration"
            className="w-full mb-4"
          />
          <h3 className="text-lg text-white font-bold mb-4">Importance Of Friendship!</h3>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-gray-100">
            CONTINUE READING
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContinueReading;
