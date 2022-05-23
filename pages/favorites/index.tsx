
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { pokemonsFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(()=>{
    setFavorites( pokemonsFavorites() );
  },[]);

  return (
      <Layout title='Pokémons - Favoritos'>
        {favorites.length === 0
          ? <NoFavorites />
          :<FavoritePokemons pokemons={favorites} />
        }
      </Layout>
  )
};

export default FavoritesPage;
