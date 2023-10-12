import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent({ query }) {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/ask', {
          query: query[query.length - 1].text,
        });

        console.log(JSON.stringify(response.data));
        setFetchedData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const renderDataWithLineBreaks = (data) => {
    return data.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="fetchedData">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{fetchedData.answer}</p>
          <p>Response Time: {fetchedData.response_time} seconds</p>
          <div>
            <ul>
              {fetchedData.source_documents.map((document, index) => (
                <li key={index}>
                  <p>Source: {document.source}</p>
                  <p>Page Content:</p>
                  <div>
                    {renderDataWithLineBreaks(document.page_content)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
