import Dropdown from 'components/Dropdown';
import SearchBar from 'components/SearchBar';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import usePokemonSearch from 'Hooks/usePokemonSearch';
import { useCallback, useEffect, useRef, useState } from 'react';
import api from 'store/api';

const Home: NextPage = () => {
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pokemonList, setPokemonList] = useState<any>([]);

  const { error, loading, pokemons, hasMore } = usePokemonSearch({
    query,
    limit,
    offset,
  });

  // loop through the list of pokemon and get the single pokemon
  const getPokemon = useCallback(async (pokemon: any) => {
    const { data } = await api.get(`/${pokemon.name}`);
    return data;
  }, []);

  const observer = useRef<any>();
  const lastPokemonElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prevOffset) => prevOffset + limit);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, limit]
  );

  const Pokemon<
  {
    name: string;
    url: string;
  }> = ({
    name,
    url
  })  => {
    return (
      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className='text-center'>{pokemon.name}</h2>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta
          name='description'
          content='The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media'
        />
        <link rel='Icon' href='/vercel.svg' />
      </Head>

      <main className='m-10 flex  gap-5'>
        <div className='flex flex-wrap  justify-between gap-5 items-center'>
          {pokemons.map(async (pokemon: any, index: number) => {
            return <Pokemon />;
          })}
        </div>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
