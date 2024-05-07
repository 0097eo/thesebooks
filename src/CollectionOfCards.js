import React, { useEffect, useState } from 'react';
import Card from './Card';

const CollectionOfCards = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://booksdata.onrender.com/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setBooks(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleCardClick = (bookId) => {
    console.log(`Clicked on book with ID: ${bookId}`);
  };

  const handleDelete = (bookId) => {}
}