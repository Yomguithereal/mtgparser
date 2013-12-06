/**
 * MTG Parsers Unit Testing
 * =========================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

var fs = require('fs'),
    assert = require('assert'),
    decParser = require('../parsers/mtgonline').parser;

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