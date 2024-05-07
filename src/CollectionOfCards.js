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

  const handleDelete = (bookId) => {
    fetch(`https://booksdata.onrender.com/books/${bookId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete book');
      }
      setBooks(books.filter(book => book.id !== bookId));
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="card-container">
          {books.map(book => (
            <Card key={book.id} title={book.title}
   
              onClick={() => handleCardClick(book.id)}
              onDelete={() => handleDelete(book.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionOfCards;