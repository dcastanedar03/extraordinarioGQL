import { Character } from "../types.ts";
import {getEpisodes} from "./getEpisodes.ts"

type APICharacter = {
    id: string, 
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string[],
    location: string[],
    image: string,
    episode: string[],
    url: string,
    created: string
};
export const getCharacters = async(ids: Array<string>): Promise<Character[]>=> {
    const BASE_URL="https://rickandmortyapi.com/api";
    const url = `${BASE_URL}/character`;
    const data = await fetch(url);
    if (data.status!=200){
        throw new Error("Error");
    }
    const json = await data.json();
    const characters: Array<Character> = json.result.map((character:APICharacter)=>{
        if (ids.includes(character.id.toString())){
            return {
                id: character.id, 
                name: character.name,
                status: character.status,
                species: character.id,
                type: character.type,
                gender: character.gender,
                origin: character.origin,
                location: character.location,
                image: character.image,
                episode: getEpisodes(character.episode.map((episode:string)=>{
                    const episodeSplitted = episode.split("/");
                    return episodeSplitted[episodeSplitted.length-1];
                })),
                url: character.url,
                created: character.created

            }
        }

    });
    const characterteresFiltrados = characters.filter((character: Character)=>{
        return character !==undefined;
    })

    return characterteresFiltrados;
 
};