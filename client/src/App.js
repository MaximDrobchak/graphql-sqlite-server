import React, { useState, useEffect } from 'react';
export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/graphql?query=query{allAuthors{lastName}}')
      .then(response => response.json())
      .then(res => setData(res.data.allAuthors))

  }, []);

  return (
    <div>
      {data.map(item =>
        <span key={item.lastName}>
          {item.lastName}
          <br />
        </span>
        )}
    </div>
  )
}