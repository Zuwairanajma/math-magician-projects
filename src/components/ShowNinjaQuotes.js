import { useEffect, useState } from 'react';

export default function ShowNinjaQuotes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);

      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=health',
          {
            headers: {
              'X-Api-Key': 'GsMN2lfNs1u9olrdYxzTGQ==VcYNEChUf4GvAyRQ',
            },
          });
        if (res.ok) {
          const result = await res.json();
          setInfo(result);
        } else {
          setError('Failed to fetch quote');
        }
      } catch (error) {
        setError('Failed to fetch quote');
      }
      setLoading(false);
    };
    fetchApiData();
  }, []);

  return (
    <div className="quote-container">
      { error ? 'Failed to fetch quote' : null }
      {loading
        ? (<p className="load-signal">Loading... </p>) : (
          <p className="Api-quote">
            {info.map((item) => (
              item.quote
            ))}
          </p>
        )}
    </div>
  );
}
