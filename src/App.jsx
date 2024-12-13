import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = "https://dummyjson.com/quotes";
  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const random = Math.floor(Math.random() * data.quotes.length);

      setQuote(data.quotes[random]);
    } catch (error) {
      "Error Fetching Data", error;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="card">
            <div className="quote">{quote.quote}</div>
            <div className="author">Author : {quote?.author}</div>
          </div>
          <div>
            <button className="btn" onClick={handleClick}>
              Generate
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
