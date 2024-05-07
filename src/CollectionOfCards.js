import React, { useEffect, useState } from 'react';
import Card from './Card';

const CollectionOfCards = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);}