/**
 * mtgparser Public API
 * ======================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

// Common interface
module.exports = function(text, format) {
  switch(format) {
    case 'mtgo':
      return require('./parsers/MTGOnline').parser(text);
      break;
    case 'mws':
      return require('./parsers/MagicWorkstation').parser(text);
      break;
    default:
      throw 'mtgparser: wrong format {' + format + '}';
      break;
  }
}
