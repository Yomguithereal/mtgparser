/**
 * mtgs Format Parser
 * ===================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

exports.parser = function(string) {
  var deck = {
    cards: [],
    sideboard: []
  };

  var deckMatch = string.match(/\[DECK\]([\s\S]*?)\[\/DECK]/),
      sideboardReached = false;

  // Iterating through deck
  deckMatch[1].split('\n').map(function(line) {

    line = line.trim();

    // Detecting sideboard start
    if (~line.toLowerCase().indexOf('sideboard')) {
      sideboardReached = true;
      return false;
    }

    // White line skipping
    if (!line)
      return false;

    // Retrieving card data
    var splat = line.split('x\t');

    var card = {
      number: +splat[0],
      name: splat[1]
    };

    // Dispatching
    if (!sideboardReached)
      deck.cards.push(card);
    else
      deck.sideboard.push(card);
  });

  return deck;
}
