export type Character = {
    id: string, 
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string[],
    location: Location[],
    image: string,
    episode: Episode[],
    url: string,
    created: string
};
export type Episode = {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    characters: Character[], 
    url: string,
    created: string
};
export type Location = {
    id: string,
    name: string,
    type: string,
    dimension: string,
    residents: Character[], 
    url: string,
    created: string
}
