import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://booksdata.onrender.com/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>Title: {book.title}</h1>
      <img src={book.image} alt={book.title} />
      <h3>Author: {book.author}</h3>
      <p>Description: {book.description}</p>
      <p>Synopsis: {book.detailedDescription}</p>
    </div>
  );
};

export default BookDetails;
