export interface Character {
  id: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  soulType?: 'ghost' | 'immortal' | 'mortal' | 'undead';
  species?: 'alien' | 'android' | 'angel' | 'centaur';
  avatar?: string;
}