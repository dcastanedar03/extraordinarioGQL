import { Location } from "../types.ts";
import { getCharacters } from "./getCharacter.ts";

type APILocation = {
    id: string,
    name: string,
    type: string,
    dimension: string,
    residents: string[], 
    url: string,
    created: string
};
export const getLocations = async(ids: string[]): Promise<Location[]>=> {
    const BASE_URL="https://rickandmortyapi.com/api";
    const url = `${BASE_URL}/location/${ids}`;
    const data = await fetch(url);
    if (data.status!=200){
        throw new Error("Error");
    }
    const json = await data.json();
    const charactersIds: Array<string> = json.map((location:APILocation)=>{
    return location.residents.map((character:string)=>{
    const characterSplitted = character.split("/");
    return characterSplitted[characterSplitted.length-1];
    }); });
    const locations: Location[] = json.map((location:APILocation)=>{
        return {
            id: location.id,
            name:location.name,
            type: location.type,
            dimension: location.dimension,
            residents: getCharacters(charactersIds), 
            url: location.url,
            created: location.created
        };
    },

)
return locations;
 
};