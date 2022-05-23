
const toggleFavorite  = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favorites. includes(id)){
        favorites = favorites.filter(pockeId => pockeId != id);
    }else{
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));

}

const existsInFavorites = (id: number): boolean => {

    if(typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);

}

const pokemonsFavorites = () : number[] => {
    return JSON.parse ( localStorage.getItem('favorites') || '[]' );  //se llama con useEfect por eso no se hace validacion de window
}

export {
    toggleFavorite,
    existsInFavorites,
    pokemonsFavorites
}