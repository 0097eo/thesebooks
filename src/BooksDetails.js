import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`http://booksdata.onrender.com/books/${bookId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book data:', error);
        setLoading(false);
      }
    };

    fetchBookData();
  }, [bookId]);

  const toggleThankYou = () => {
    setShowThankYou(!showThankYou);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {loading ? (
        <p>Loading...</p>
      ) : book ? (
        <div>
          <h2>Title: {book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          {book.image && <img src={book.image} alt={book.title} />}
          <p>Detailed Description: {book.detailedDescription}</p>
          <button onClick={toggleThankYou}>
            {showThankYou ? 'Thank You' : 'Click to Show Thank You'}
          </button>
          {showThankYou && <p>Thank You</p>}
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      ) : (
        <p>No book data available</p>
      )}
    </div>
  );
};

export default BookDetails;
