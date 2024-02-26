import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(`${data.content} - ${data.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div>
      <h2>Quote Generator:</h2>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <button onClick={handleNewQuote}><i>New Quote</i></button>
    </div>
  );
};

export default QuoteGenerator;
