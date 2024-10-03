import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const ImageCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <div className="rounded-xl overflow-hidden mb-5">
          <img
            src="https://images.unsplash.com/photo-1696940823933-f0eca7c9c1ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlJTIwZnJ1aXR8ZW58MHx8MHx8fDI%3D"
            alt="Fruit"
            className="w-full h-auto"
          />
        </div>
        <div className="text-2xl font-semibold mb-5">fruit</div>
        <div className="flex justify-center gap-4 mb-5">
          <button className="bg-orange-500 text-white rounded-full p-4">
            <i className="bi bi-play-circle-fill text-2xl"></i>
          </button>
          <button className="bg-orange-500 text-white rounded-full p-4">
            <i className="bi bi-mic-fill text-2xl"></i>
          </button>
          <button className="bg-orange-500 text-white rounded-full p-4">
            <i className="bi bi-record-fill text-2xl"></i>
          </button>
        </div>
        <div className="flex justify-between mt-5">
          <button className="bg-gray-200 rounded-full py-2 px-5 transition-colors duration-300 hover:bg-orange-500 hover:text-white">
            <i className="bi bi-chevron-left"></i> Back
          </button>
          <button className="bg-gray-200 rounded-full py-2 px-5 transition-colors duration-300 hover:bg-orange-500 hover:text-white">
            Next <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
