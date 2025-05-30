import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://backend:5000/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>React + Express + MongoDB</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
