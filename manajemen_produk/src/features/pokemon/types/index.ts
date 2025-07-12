export interface Pokemon {
  count: number;
  results: Result[];
  next: number;
  previous: number;
}

export interface Result {
  name: string;
  url: string;
}

export interface BattleArmor {
  effect_entries: EffectEntries[];
}

export interface EffectEntries {
  effect: string;
}
