import { useEffect, useState } from 'react';
import api from 'store/api';

export default function usePokemonSearch({
  query,
  limit,
  offset,
}: {
  query: string;
  limit: number;
  offset: number;
}) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api
      .get(`/?offset=${offset}&limit=${limit}`)
      .then((response) => {
        setPokemons(response?.data?.results);
        setLoading(false);

        if (response?.data?.results?.length < limit) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [query, limit, offset]);

  return { pokemons, loading, error, hasMore };
}
