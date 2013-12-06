/**
 * mtg-parser Public API
 * ======================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

var fs = require('fs');

// Batch exporting
exports = {
  MTGOnlineParser: require('./parsers/mtgonline').parser
}