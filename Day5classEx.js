import React, { useState } from 'react';

const ErrorHandling = () => {
  const [error, setError] = useState(null);

  const Error = () => {
    try {
      const undefinedVariable = undefined;
      console.log(undefinedVariable.someProperty);
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Error Handling</h1>
      <button onClick={Error}>Error</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default ErrorHandling;