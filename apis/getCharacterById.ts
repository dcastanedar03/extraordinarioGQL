import { getLocations } from "./getLocation.ts";
import { Character } from "../types.ts";
import {getEpisodes} from "./getEpisodes.ts"
export const getCharacterById = async(id: string)=> {
    const BASE_URL="https://rickandmortyapi.com/api";
    const url = `${BASE_URL}/character/${id}`;
    const data = await fetch(url);
    if (data.status!=200){
        throw new Error("Error");
    }
    const json = await data.json();
    const locationId= json.location.map((location:string)=>{
        const locationSplitted = location.split("/");
        return locationSplitted[locationSplitted.length-1];
    });
    const episodeId= json.episode.map((episode:string)=>{
        const episodeSplitted = episode.split("/");
        return episodeSplitted[episodeSplitted.length-1];
    }
    );
    const character: Character = {
        id: json.id,
        name:json.name,
        status: json.status,
        species: json.species,
        type: json.type,
        gender: json.gender,
        origin: [json.origin.name, json.origin.url],
        location: await getLocations(locationId),
        image: json.image,
        episode: await getEpisodes(episodeId),
        url: json.url,
        created: json.created
    }
    return character;
}