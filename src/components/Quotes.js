import React, { useEffect, useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'PR9OrpSi7kbt4/xm76yLrQ==GDPbm1EnnixMX3cm';

    fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
      headers: { 'X-Api-Key': apiKey },
    })

      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote">
      <h2>Educational Quote</h2>
      <div className="quote-text">
        <blockquote>{quote.quote}</blockquote>
        <p>
          -
          {quote.author}
        </p>
      </div>
    </div>
  );
}

export default Quotes;
