import { combineReducers } from 'redux';
import * as pokemonConstants from '../constants/pokemon.constants';

const initialState = {
  pokemons: [],
  pokemon: {},
  isLoading: false,
  error: null,
};

export const pokemonListReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case pokemonConstants.GET_POKEMON_LIST_REQUEST:
      console.log({
        ...state,
      });

      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case pokemonConstants.GET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        pokemons: payload,
        isLoading: false,
        error: null,
      };
    case pokemonConstants.GET_POKEMON_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case pokemonConstants.GET_POKEMON_LIST_RESET:
      return {
        ...state,
        pokemon: [],
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const pokemonReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case pokemonConstants.GET_POKEMON_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case pokemonConstants.GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: payload,
        isLoading: false,
        error: null,
      };
    case pokemonConstants.GET_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case pokemonConstants.GET_POKEMON_RESET:
      return {
        ...state,
        pokemon: [],
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemon: pokemonReducer,
});
