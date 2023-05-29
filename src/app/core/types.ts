export interface PokemonData {
  name: string,
  sex?: string,
  type: string,
  nature: string,
  speciesStrength: Statistic,
  Statistic: Statistic,
  move: string[],
  item: string,
  shiny?: boolean,
  pokerus?: boolean
};

export interface Statistic {
  hitPoints: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number
};

export interface DisplayCard {
  title: string,
  subtitle?: string,
  description?: string
};

export interface MenuList {
  title: string,
  icon: string,
  router: string
};