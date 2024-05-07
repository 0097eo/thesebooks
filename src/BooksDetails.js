import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  


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
        setLoading(true);
      }
    };

   
    fetchBookData();
  }, [bookId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : book ? (
        <div>
          <h2>Title : {book.title}</h2>
          <p>Author : {book.author}</p>
          <p>Description : {book.description}</p>
          <p>Image :  {book.image}</p>
          <p>DetailedDescription : {book.detailedDescription}</p>
        
        </div>
      ) : (
        <p>No book data available</p>
      )}
    </div>
  );
};

export default BookDetails;
