import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <h3> Loading ... </h3>
  }

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
