import React, { useState } from 'react';
import './Book.css'; // Custom keyframe animations
// Api 
const pages = [
  {
    image: 'https://images.unsplash.com/photo-1726134212431-c794fd3d0c34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D', // Replace with your images
    title: 'Chapter 1: The Beginning',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://images.unsplash.com/photo-1725489890986-330621425633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
    title: 'Chapter 2: The Journey',
    text: 'Praesent dapibus efficitur felis at viverra.',
  },
  {
    image: 'https://images.unsplash.com/photo-1725714355502-3cea92c6c3f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
    title: 'Chapter 3: The Adventure',
    text: 'Suspendisse potenti. In hac habitasse platea dictumst.',
  },
];

// Component 
const PictureBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipForward, setFlipForward] = useState(false);
  const [flipBackward, setFlipBackward] = useState(false);

  // Flip Logic 
  const flipPageForward = () => {
    if (currentPage < pages.length - 1) {
      setFlipForward(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setFlipForward(false);
      }, 600); 
    }
  };

  const flipPageBackward = () => {
    if (currentPage > 0) {
      setFlipBackward(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setFlipBackward(false);
      }, 600);
    }
  };

  return (
    <div className="book-container flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`book relative w-96 h-64 border-2 bg-white border-yellow-400 shadow-md transform transition-transform duration-600  perspective-1000 ${
          flipForward ? 'flip-forward' : flipBackward ? 'flip-backward' : ''
        }`}
      >
        {/* Left page with image */}
        <div className="page left absolute w-1/2 h-full bg-white overflow-hidden">
          <img
            src={pages[currentPage].image}
            alt="Book image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right page with text */}
        <div className="page right absolute w-1/2 h-full overflow-none bg-white right-0">
          <div className="p-4">
            <h2 className="text-xl font-bold">{pages[currentPage].title}</h2>
            <p className="text-sm mt-4">{pages[currentPage].text}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 flex space-x-4">
        <button
          onClick={flipPageBackward}
          disabled={currentPage === 0}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <button
          onClick={flipPageForward}
          disabled={currentPage === pages.length - 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === pages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PictureBook;