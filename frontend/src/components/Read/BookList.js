import React, { useState } from "react";

const books = [
  {
    image: "https://via.placeholder.com/300x200.png?text=Picture+Book+1",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Picture Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Picture+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Picture Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Picture+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Picture Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Picture+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Picture Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Picture+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Picture Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Picture+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Picture Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Picture+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Picture Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Story+Book+1",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Story Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Story+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Story Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Text+Book+1",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Text Book",
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Text+Book+2",
    title: "WHEN SHE READS",
    author: "Barbara Mill",
    rating: "5",
    category: "Text Book",
  },
];

const BookList = () => {
  const [activeTab, setActiveTab] = useState("Picture Book");

  // Filter the books based on the activeTab (category)
  const filteredBooks = books.filter((book) => book.category === activeTab);

  return (
    <div className="p-8">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {["Picture Book", "Story Book", "Text Book"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-semibold text-sm rounded-md ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-500 border"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative h-max p-10 gap-8">
        
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="z-10 mb-5 relative rounded-lg shadow-md overflow-hidden h-[200px] w-[350px]"
          >
            {/* Book Image */}
            <img
              src={book.image}
              alt={book.title}
              className="w-full absolute h-full object-cover z-10"
            />

          <div className="absolute p-4 bottom-0 z-50 bg-gradient-to-t from-black via-gray-500  to-transparent w-full">
              {/* Book Info */}
              <div className="">
              <h3 className="text-lg text-white font-semibold">{book.title}</h3>
              <p className="text-sm text-white">Author: {book.author}</p>
            </div>

            {/* Rating & Read Button */}
            <div className="absolute bottom-4 right-4 flex bg-orange-500 items-center space-x-2 px-2 py-1 rounded-md shadow">
              <span className="text-white font-bold">{book.rating}</span>
              <button className="bg-orange-500 text-white text-s text-bold px-1 py-1 rounded-md">
                READ
              </button>
            </div>
          </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;