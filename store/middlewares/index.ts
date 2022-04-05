import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';

const middlewares = (middlewares: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

export default middlewares;
