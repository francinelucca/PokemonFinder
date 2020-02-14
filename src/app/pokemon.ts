export interface Pokemon {
    id: number,
    url: string,
    name: string,
    weight: number,
    height: number,
    sprites: sprite,
    species: species,
    base_experience: number,
    types: type[],
    stats: stat[],
    abilities: ability[],
    moves: move[],
}

export interface sprite {
    front_default: string,
}

export interface species {
    name: string,
}

export interface type {
    type: {name: string},
}

export interface stat {
    base_stat: number,
    stat: {name: string},
}

export interface ability {
    ability: {name: string},
}

export interface move {
    move: {name: string},
}