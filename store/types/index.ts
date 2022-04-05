export interface CounterState {
  count: number;
}

export interface PokemonResults {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Ability2 {
  name: string;
  url: string;
}
