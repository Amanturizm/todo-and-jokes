import React from 'react';

const JokesButton = () => {
  return <button className="btn btn-outline-primary">Generate Jokes</button>;
};

export default React.memo(JokesButton);