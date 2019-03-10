const Translations = {
    vulgarFractionTranslations: {
        '¼': .25,
        '½': .5,
        '¾': .75,
        '⅐': 1 / 7,
        '⅑': 1 / 9,
        '⅒': .1,
        '⅓': 1 / 3,
        '⅔': 2 / 3,
        '⅕': .2,
        '⅖': .4,
        '⅗': .6,
        '⅘': .8,
        '⅙': 1 / 6,
        '⅚': 5 / 6,
        '⅛': .125,
        '⅜': .375,
        '⅝': .625,
        '⅞': .875
    },

    fractionBarriers: {
        '1/4': {
            gt: .225,
            eq: .25,
            lt: .275
        },
        '1/3': {
            gt: .308,
            eq: 1/3,
            lt: .358
        },
        '1/2': {
            gt: .475,
            eq: .5,
            lt: .525
        },
        '2/3': {
            gt: .641,
            eq: 2/3,
            lt: .691
        }
    },

    vulgarFractionUnicodeSet: '\\u00BC-\\u00BE\\u2150-\\u215E'
};

export default Translations;