import { Episode } from "../types.ts";
import { getCharacters } from "./getCharacter.ts";

type APIEpisode = {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    characters: string[], 
    url: string,
    created: string
};
export const getEpisodes = async(ids: string[]): Promise<Episode[]>=> {
    const BASE_URL="https://rickandmortyapi.com/api";
    const url = `${BASE_URL}/episode/${ids}`;
    const data = await fetch(url);
    if (data.status!=200){
        throw new Error("Error");
    }
    const json = await data.json();
    const charactersIds: Array<string> = json.map((episode:APIEpisode)=>{
    return episode.characters.map((character:string)=>{
    const characterSplitted = character.split("/");
    return characterSplitted[characterSplitted.length-1];
    }); });
    const episodes: Episode[] = json.map((episode:APIEpisode)=>{
        return {
            id: episode.id,
            name:episode.name,
            air_date: episode.air_date,
            episode: episode.episode,
            characters: getCharacters(charactersIds), 
            url: episode.url,
            created: episode.created
        };
        
    }, 

)
return episodes;
 
};