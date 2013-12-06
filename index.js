/**
 * mtgparser Public API
 * ======================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

// Common interface
module.exports = function(text, format) {
  switch(params.format) {
    case 'mtgonline':
      return require('./parsers/mtgonline').parser(text);
      break;
    default:
      throw 'mtgparser: wrong format {' + format + '}';
      break;
  }
}
