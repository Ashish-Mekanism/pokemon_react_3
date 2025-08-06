import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../../../../component/Searchbar/Searchbar';
import './Pokemon.Styled.scss';
import Card from '../../../../component/Card/Card';
import { getAllPokemon } from '../../../../api/pokemonapi';
import Image from '../../../images/image.png';
import { IPokemon } from '../../../../type/types';

const Pokemonpage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [localSearch, setLocalSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(localSearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(localSearch.toLowerCase());
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearch]);

  const fetchPokemon = async (url?: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found');
      return;
    }

    try {
      const res = await getAllPokemon(token, url);
      setPokemons((prev) => [...prev, ...res.data.data]);
      setNextUrl(res.data.next || null);
    } catch (error) {
      console.error('Failed to fetch Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleLoadMore = () => {
    if (nextUrl) fetchPokemon(nextUrl);
  };

  const filteredPokemon = pokemons.filter((poke) =>
    poke.name?.english?.toLowerCase().includes(debouncedSearch)
  );

  return (
    <div>
      <Navbar />
      <div className='outer'>
        <div className='outerContainert'>
          <Searchbar
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <div className='pokemonlist'>
            {filteredPokemon.map((poke) => (
              <Card
                key={poke.id}
                id={poke.id}
                name={poke.name?.english || 'unknown'}
                types={poke.type}
                image={poke.image.hires || Image}
              />
            ))}
          </div>
          {nextUrl && (
            <button
              onClick={handleLoadMore}
              className='load-more'
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemonpage;
