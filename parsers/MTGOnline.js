/**
 * mtgo Format Parser
 * ===================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

exports.parser = function(string) {
  var deck = {
    cards: [],
    sideboard: []
  };

  // Iterating through lines
  string.split('\n').map(function(line) {

    // Trimming
    line = line.trim();
    if (!line)
      return false;

    if (~line.indexOf('//')) {

      // Commentary
      ['NAME', 'CREATOR', 'FORMAT'].map(function(meta) {
        if (~line.indexOf(meta)) {
          deck[meta.toLowerCase()] = line.split(meta + ' : ')[1];
        }
      });
    }
    else {
      if (line.slice(0, 3) !== 'SB:') {

        // Deck
        var splat = line.split(' ');

        deck.cards.push({
          number: +splat[0],
          name: splat.slice(1).join(' ')
        });
      }
      else {

        // Sideboard
        var splat = line.split('SB:')[1].trim().split(' ');

        deck.sideboard.push({
          number: +splat[0],
          name: splat.slice(1).join(' ')
        });
      }
    }
  });

  return deck;
}
