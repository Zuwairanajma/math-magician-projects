// import PropTypes from 'prop-types';

// import { useEffect, useState } from 'react';

// export default function ShowNinjaQuotes() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [info, setInfo] = useState([]);

//   useEffect(() => {
//     const fetchApiData = async () => {
//       setLoading(true);

//       try {
//         const res = await fetch(
//           'https://api.api-ninjas.com/v1/quotes?category=health&limit=5',
//           {
//             headers: {
//               'X-Api-Key': 'GsMN2lfNs1u9olrdYxzTGQ==VcYNEChUf4GvAyRQ',
//             },
//           },
//         );
//         if (res.ok) {
//           const result = await res.json();
//           setInfo(result);
//         } else {
//           setError('Failed to fetch quote');
//         }
//       } catch (error) {
//         setError('Failed to fetch quote');
//       }
//       setLoading(false);
//     };
//     fetchApiData();
//   }, []);

//   return (
//     <div className="quote-container">
//       {error ? 'Failed to fetch quote' : null}
//       {loading ? (
//         <p className="load-signal">Loading... </p>
//       ) : (
//         <div>
//           {info.map((item) => (
//             <Quote key={item.id} quote={item.quote} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // Create a separate Quote component
// function Quote({ quote }) {
//   return <p className="Api-quote">{quote}</p>;
// }
// Quote.propTypes = {
//   quote: PropTypes.string.isRequired,
// };
import React, { useEffect, useState } from 'react';

function ShowNinjaQuotes() {
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

export default ShowNinjaQuotes;
