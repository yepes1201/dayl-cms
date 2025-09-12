import * as migration_20250912_143819 from './20250912_143819';

export const migrations = [
  {
    up: migration_20250912_143819.up,
    down: migration_20250912_143819.down,
    name: '20250912_143819'
  },
];
