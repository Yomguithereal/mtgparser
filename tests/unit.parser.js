/**
 * MTG Parsers Unit Testing
 * =========================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

var fs = require('fs'),
    assert = require('assert'),
    decParser = require('../parsers/MTGOnline').parser
    mwDeckParser = require('../parsers/MagicWorkstation').parser;

/**
 * Helpers
 */
function loadDeck(filename) {
  return fs.readFileSync(
    process.cwd() + '/tests/resources/' + filename, 'utf-8'
  );
}

/**
 * .dec file format
 */
describe('.dec file format', function() {
  it('should return this object', function() {
    assert.deepEqual(
      decParser(loadDeck('sample.dec')),
      {
        cards:
         [ { number: 2, name: 'Nykthos, Shrine to Nyx' },
           { number: 18, name: 'Forest' },
           { number: 2, name: 'Nylea, God of the Hunt' },
           { number: 2, name: 'Polukranos, World Eater' },
           { number: 3, name: 'Centaur Battlemaster' },
           { number: 3, name: 'Karametra\'s Acolyte' },
           { number: 3, name: 'Reverent Hunter' },
           { number: 3, name: 'Sylvan Caryatid' },
           { number: 4, name: 'Arbor Colossus' },
           { number: 4, name: 'Nylea\'s Disciple' },
           { number: 4, name: 'Sedge Scorpion' },
           { number: 2, name: 'Bow of Nylea' },
           { number: 4, name: 'Ordeal of Nylea' },
           { number: 4, name: 'Defend the Hearth' },
           { number: 4, name: 'Warrior\'s Lesson' } ],
        sideboard:
         [ { number: 3, name: 'Leafcrown Dryad' },
           { number: 4, name: 'Fade into Antiquity' },
           { number: 4, name: 'Mistcutter Hydra' },
           { number: 4, name: 'Savage Surge' } ],
        name: 'Deck Bloc Dévotion à Nyléa',
        creator: 'ShadowsSoul (magic-ville.com)',
        format: 'Standard'
      }
    );
  });
});

/**
 * Irregular sideboard syntax
 */
describe('Irregular sideboard syntax', function() {
  it('should return this object', function() {
    assert.deepEqual(
      decParser(loadDeck('sb.dec')),
      {
        cards:
         [ { number: 4, name: 'Devoted Druid' },
           { number: 4, name: 'Elvish Archdruid' },
           { number: 4, name: 'Essence Warden' },
           { number: 4, name: 'Fauna Shaman' },
           { number: 4, name: 'Ivy Lane Denizen' },
           { number: 4, name: 'Joraga Treespeaker' },
           { number: 4, name: 'Joraga Warcaller' },
           { number: 4, name: 'Llanowar Elves' },
           { number: 4, name: 'Wall of Tanglecord' },
           { number: 4, name: 'Presence of Gond' },
           { number: 20, name: 'Forest' } ],
        sideboard: [ { number: 4, name: 'Helix Pinnacle' } ]
      }
    );
  });
});

/**
 * .mwDeck file format
 */

describe('.mwDeck file format', function() {
  it('should return this object', function() {
    assert.deepEqual(
      mwDeckParser(loadDeck('sample.mwDeck')),
      {
        cards:
         [ { number: 4, set: 'M14', name: 'Mutavault' },
           { number: 18, set: 'UNH', name: 'Plains' },
           { number: 2, set: 'GTC', name: 'Daring Skyjek' },
           { number: 4, set: 'RTR', name: 'Azorius Arrester' },
           { number: 4, set: 'M14', name: 'Banisher Priest' },
           { number: 4, set: 'GTC', name: 'Boros Elite' },
           { number: 4, set: 'RTR', name: 'Dryad Militant' },
           { number: 4, set: 'M14', name: 'Imposing Sovereign' },
           { number: 4, set: 'RTR', name: 'Precinct Captain' },
           { number: 4, set: 'THS', name: 'Soldier of the Pantheon' },
           { number: 3, set: 'THS', name: 'Spear of Heliod' },
           { number: 1, set: 'RTR', name: 'Rootborn Defenses' },
           { number: 4, set: 'M14', name: 'Brave the Elements' } ],
        sideboard:
         [ { number: 1, set: 'DGM', name: 'Wear/Tear' },
           { number: 2, set: 'THS', name: 'Glare of Heresy' },
           { number: 3, set: 'M14', name: 'Fiendslayer Paladin' },
           { number: 3, set: 'DGM', name: 'Riot Control' },
           { number: 3, set: 'M14', name: 'Ajani, Caller of the Pride' },
           { number: 3, set: 'RTR', name: 'Rootborn Defenses' } ],
        name: 'WW Human',
        creator: 'meltiin (magic-ville.com)',
        format: 'Standard'
      }
    );
  });
});
