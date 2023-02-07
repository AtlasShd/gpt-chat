import React, { useState } from 'react';
import description from './openai/index.js';

// openai.promisified = true;

const App = () => {
  const [desc, setDesc] = useState('');
  const [keywords, setKeywords] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const answer = await description(desc);

    setOutput(answer);
  };

  return (
    <div className="header neon">
      <h1>Man Describer</h1>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="input"
        />
        <button type="submit" className="submit-button neon">
          Describe
        </button>
      </form>
      <p>{output}</p>
    </div>
  );
};

export default App;
