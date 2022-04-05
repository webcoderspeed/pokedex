import { HYDRATE, createWrapper, Context } from 'next-redux-wrapper';
import { createStore, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import middlewares from './middlewares/index';
import { PokemonResults } from './types';
import { rootReducer } from './reducers/pokemon.reducers';

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const makeStore = (context: Context) => {
  const store = createStore(reducer, middlewares([thunk]));
  return store;
};

export const wrapper = createWrapper(makeStore);
