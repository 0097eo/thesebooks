import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState('');
  const [showForm, setShowForm] = useState(false); 
  const [buttonText, setButtonText] = useState('Rate this book'); 
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://booksdata.onrender.com/books/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating }),
      });

      if (!response.ok) {
        throw new Error('Failed to rate the book');
      }

      alert('Rating submitted successfully');
      setShowForm(false); // Hide the form after successful submission
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
    if (showForm) {
      setButtonText('Rate this book'); 
    } else {
      setButtonText('Close Rating'); 
    }
  };

  if (!book) return <div><h1 className='details-loading'>Getting Details...</h1></div>;

  return (
    <div className="book-details-container">
      <div className="image-container">
        <img src={book.image} alt={book.title} />
        <a href={book.link} target="_blank" rel="noopener noreferrer">Read Book</a>
      </div>
      <div className="details-container">
        <h1>Title: {book.title}</h1>
        <p><strong>ISBN: </strong>{book.isbn}</p>
        <h3>Author: {book.author}</h3>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Synopsis:</strong> {book.detailedDescription}</p>
        <p><strong>Pages:</strong> {book.pageCount}</p>
        <p><strong>Rating:</strong> {book.rating}/5</p>
        <button onClick={toggleFormVisibility} className='book-rating-btn'>{buttonText}</button>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="rating">Rate this book:</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
            />
            <button type="submit">Submit Rating</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
