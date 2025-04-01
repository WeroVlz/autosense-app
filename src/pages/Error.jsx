import React, { use, useReducer } from 'react';

const Error = () => {
  const error = useRouterError();
  console.log(error);
  return <div>Error</div>;
};

export default Error;
