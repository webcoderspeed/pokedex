import * as pokemonConstants from '../constants/pokemon.constants';
import api from 'store/api';

export const getPokemonList = () => async (dispatch: any) => {
  dispatch({
    type: pokemonConstants.GET_POKEMON_LIST_REQUEST,
  });

  try {
    const { data } = await api.get(`?limit=1126`);

    const pokemons = data.results.map((pokemon: any) => pokemon.name);

    // promise all
    const promises = pokemons.map((pokemon: any) => api.get(`/${pokemon}`));

    const results = await Promise.all(promises);

    const pokemonList = results.map((result: any) => result.data);

    dispatch({
      type: pokemonConstants.GET_POKEMON_LIST_SUCCESS,
      payload: pokemonList,
    });
  } catch (error) {
    dispatch({
      type: pokemonConstants.GET_POKEMON_LIST_FAILURE,
      payload: error,
    });
  }
};
