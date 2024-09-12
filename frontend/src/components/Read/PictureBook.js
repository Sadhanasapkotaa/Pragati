import React, { useState } from 'react';

const pages = [
  { content: "Page 1: Introduction" },
  { content: "Page 2: About React" },
  { content: "Page 3: About Tailwind CSS" },
  { content: "Page 4: Conclusion" },
];

const PictureBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="flipbook-container relative w-full h-screen flex items-center justify-center">
      <div className="flipbook w-[300px] h-[400px] perspective-1000 relative">
        <div className="page relative w-full h-full transition-transform duration-700" style={{
          transform: `rotateY(${currentPage * -180}deg)`
        }}>
          <div className="front absolute w-full h-full bg-white shadow-md text-center p-10 flex items-center justify-center backface-hidden">
            {pages[currentPage].content}
          </div>
          <div className="back absolute w-full h-full bg-gray-100 shadow-md text-center p-10 flex items-center justify-center rotate-y-180 backface-hidden">
            {pages[(currentPage + 1) % pages.length].content}
          </div>
        </div>
      </div>
      <div className="controls absolute bottom-10 flex gap-4">
        <button onClick={prevPage} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg">Previous</button>
        <button onClick={nextPage} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg">Next</button>
      </div>
    </div>
  );
};

export default PictureBook;
