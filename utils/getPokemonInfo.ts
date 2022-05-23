import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (field: string) => {

    const { data } = await  pokeApi.get<Pokemon>(`/pokemon/${field}`);

    return {  //evitar guardar toda la demas data inecesaria en el server con el build
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}

