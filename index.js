/**
 * mtg-parser Public API
 * ======================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

var fs = require('fs');

exports = {
  MTGOnlineParser: require('./parsers/mtgonline').parser
}