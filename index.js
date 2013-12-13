/**
 * mtgparser Public API
 * ======================
 *
 * Author: PLIQUE Guillaume (Yomguithereal)
 */

// Common interface
module.exports = function(text, format) {

  // Default value
  format = format || 'mtgo';

  var requires = {
    mtgo: 'MTGOnline',
    mws: 'MagicWorkstation',
    mtgs: 'MTGSalvation'
  };

  if (requires[format] === undefined)
    throw 'mtgparser: wrong format {' + format + '}';

  return require('./parsers/' + requires[format]).parser(text);
}
