# MTG Parsers

MTG Parser is a npm module providing a compilation of handy parsers for popular Magic the Gathering deck textual formats.

## Installation

Through npm

```
npm install mtg-parser
```

Through your package.json dependencies

```json
"dependencies": {
	"mtg-parser": "0.1.0"
}
```

## Usage

```js
var mtgparser = require('mtg-parser');

var deck = mtgparser(deck_string, format);
>>> {cards: [], sideboard: [] ...}
```

The parser returns an objects containing at least an array of the deck's cards and another with its sideboard's cards (if this one exists). Sometimes, depending on the format, the parser may return additional metadata such as the name of the author or the source url.

Both cards arrays contain card objects defined by a minimum of a *number* of occurrences and a card *name*. Some format may also provide an *edition*.

## Example

Passing this dummy and quite empty deck

```
// NAME : Dummy deck
// FORMAT : Standard
        2 Nykthos, Shrine to Nyx
        18 Forest
        2 Nylea, God of the Hunt
SB:  3 Leafcrown Dryad
```

```js
var mtgparser = require('mtg-parser');
var deck = mtgparser(deck_string, 'mtgo');
```
would return

```
{
	name: 'Dummy deck',
	format: 'Standard',
	cards: [
		{number: 2, name: 'Nykthos, Shrine to Nyx'},
		{number: 18, name: 'Forest'},
		{number: 2, name: 'Nylea, God of the Hunt'}
	],
	sideboard: [
		{number: 3, name: 'Leafcrown Dryad'}
	]
}
```

## Supported Formats

* [MTG Online](#mtg-online)
* [Magic Workstation](#magic-workstation)
* [MTG Salvation](#mtg-salvation)

### MTG Online

identifier: **mtgo**

```
// NAME : Deck Bloc Dévotion à Nyléa
// CREATOR : ShadowsSoul (magic-ville.com)
// FORMAT : Standard
        2 Nykthos, Shrine to Nyx
        18 Forest
        2 Nylea, God of the Hunt
        2 Polukranos, World Eater
        3 Centaur Battlemaster
        3 Karametra's Acolyte
        3 Reverent Hunter
        3 Sylvan Caryatid
        4 Arbor Colossus
        4 Nylea's Disciple
        4 Sedge Scorpion
        2 Bow of Nylea
        4 Ordeal of Nylea
        4 Defend the Hearth
        4 Warrior's Lesson
SB:  3 Leafcrown Dryad
SB:  4 Fade into Antiquity
SB:  4 Mistcutter Hydra
SB:  4 Savage Surge
```

### Magic Workstation

identifier: **mws**

```
// Deck file for Magic Workstation (http://www.magicworkstation.com)
// NAME : WW Human
// CREATOR : meltiin (magic-ville.com)
// FORMAT : Standard
        4 [M14] Mutavault
        18 [UNH] Plains
        2 [GTC] Daring Skyjek
        4 [RTR] Azorius Arrester
        4 [M14] Banisher Priest
        4 [GTC] Boros Elite
        4 [RTR] Dryad Militant
        4 [M14] Imposing Sovereign
        4 [RTR] Precinct Captain
        4 [THS] Soldier of the Pantheon
        3 [THS] Spear of Heliod
        1 [RTR] Rootborn Defenses
        4 [M14] Brave the Elements
SB:  1 [DGM] Wear/Tear
SB:  2 [THS] Glare of Heresy
SB:  3 [M14] Fiendslayer Paladin
SB:  3 [DGM] Riot Control
SB:  3 [M14] Ajani, Caller of the Pride
SB:  3 [RTR] Rootborn Defenses
```

### MTG Salvation

identifier: **mtgs**

```
[DECK]
4x	Ancient Stirrings
2x	Breeding Pool
4x	Deathrender
4x	Deathrite Shaman
3x	Emrakul, the Aeons Torn
4x	Fauna Shaman
1x	Forest
2x	Liliana of the Veil
1x	Marsh Flats
4x	Misty Rainforest
4x	Noble Hierarch
3x	Overgrown Tomb
4x	Serum Visions
2x	Steelshaper's Gift
1x	Swamp
4x	Sylvan Caryatid
1x	Temple Garden
4x	Verdant Catacombs
4x	Viscera Seer
2x	Watery Grave
2x	Wild Cantor

Sideboard
3x	Abrupt Decay
3x	Damnation
4x	Leyline of Sanctity
3x	Leyline of the Void
2x	Remand
[/DECK]
[URL="http://tappedout.net/mtg-decks/deathrender-a-combo-concept/"]Link to deck @ TappedOut.net[/URL]
```

### Contribution

Please feel free to contribute to this compilation of parsers. If you do so, please add unit tests accordingly. You can run them with the following command.

```
npm test
```
