const Measurements = {
    us: {
        drop: {
            id: 'us_drop',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'drop',
                    plural: 'drops'
                }
            },
            conversions: {
                us_base: 1/480,
                si_base: 0.061611519921875
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'drops?',
                    'gtt?s?'
                ]
            },
            up: 'us_teaspoon',
            down: null
        },
        minim: {
            id: 'us_minim',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'minim',
                    plural: 'minims'
                }
            },
            conversions: {
                us_base: 1/480,
                si_base: 0.061611519921875
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'minims?',
                    'mins?'
                ]
            },
            up: 'us_teaspoon',
            down: null
        },
        fluid_dram: {
            id: 'us_fluid_dram',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'fluid dram',
                    plural: 'fluid drams'
                }
            },
            conversions: {
                us_base: 0.125,
                si_base: 3.6966911953125
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'fluid drams?',
                    'fluidrams?',
                    'fl drams?',
                    'fl drs?',
                ]
            },
            up: 'us_teaspoon',
            down: 'us_drop'
        },
        teaspoon: {
            id: 'us_teaspoon',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'teaspoon',
                    plural: 'teaspoons'
                }
            },
            conversions: {
                us_base: 1/6,
                si_base: 4.92892159375
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'teaspoons?',
                    'tsps?'
                ]
            },
            up: 'us_tablespoon',
            down: 'us_drop'
        },
        tablespoon: {
            id: 'us_tablespoon',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'tablespoon',
                    plural: 'tablespoons'
                }
            },
            commonality: {
                recipes: true
            },
            conversions: {
                us_base: 0.5000000000,
                si_base: 14.78676478125
            },
            identifiers: {
                en_us: [
                    'tablespoons?',
                    'tbsps?'
                ]
            },
            up: 'us_fluid_ounce',
            down: 'us_teaspoon'
        },
        fluid_ounce: {
            id: 'us_fluid_ounce',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'fluid ounce',
                    plural: 'fluid ounces'
                }
            },
            conversions: {
                us_base: 1,
                si_base: 29.5735295625
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'fluid ounces?',
                    'fl ounces?',
                    'fl ozs?'
                ]
            },
            up: 'us_cup',
            down: 'us_tablespoon'
        },
        shot: {
            id: 'us_shot',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'shot',
                    plural: 'shots'
                }
            },
            conversions: {
                us_base: 1.5,
                si_base: 44.36029434375
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'shots?',
                    'jigs?'
                ]
            },
            up: 'us_cup',
            down: 'us_fluid_ounce'
        },
        gill: {
            id: 'us_gill',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'gill',
                    plural: 'gills'
                }
            },
            conversions: {
                us_base: 4,
                si_base: 118.29411825
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'gills?',
                    'gis?'
                ]
            },
            up: 'us_cup',
            down: 'us_fluid_ounce'
        },
        cup: {
            id: 'us_cup',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'cup',
                    plural: 'cups'
                }
            },
            conversions: {
                us_base: 8,
                si_base: 236.5882365
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'cups?',
                    'cps?',
                    'cs?'
                ]
            },
            up: 'us_pint',
            down: 'us_fluid_ounce'
        },
        pint: {
            id: 'us_pint',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'pint',
                    plural: 'pints'
                }
            },
            conversions: {
                us_base: 16,
                si_base: 473.176473
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'pints?',
                    'pts?'
                ]
            },
            up: 'us_quart',
            down: 'us_cup'
        },
        quart: {
            id: 'us_quart',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'quart',
                    plural: 'quarts'
                }
            },
            conversions: {
                us_base: 32,
                si_base: 946.352946
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'quarts?',
                    'qts?'
                ]
            },
            up: 'us_gallon',
            down: 'us_pint'
        },
        gallon: {
            id: 'us_gallon',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'gallon',
                    plural: 'gallons'
                }
            },
            conversions: {
                us_base: 128,
                si_base: 3785.411784
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'gallons?',
                    'gals?'
                ]
            },
            up: 'us_barrel',
            down: 'us_quart'
        },
        barrel: {
            id: 'us_barrel',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'barrel',
                    plural: 'barrels'
                }
            },
            conversions: {
                us_base: 4032,
                si_base: 119240.471196
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'barrels?',
                    'bbls?'
                ]
            },
            up: 'us_hogshead',
            down: 'us_gallon'
        },
        hogshead: {
            id: 'us_hogshead',
            system: 'US',
            type: 'volume',
            label: {
                en_us: {
                    single: 'hogshead',
                    plural: 'hogsheads'
                }
            },
            conversions: {
                us_base: 8064,
                si_base: 238480.942392
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'hogsheads?'
                ]
            },
            up: null,
            down: 'us_barrel'
        },
        grain: {
            id: 'us_grain',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'grain',
                    plural: 'grains'
                }
            },
            conversions: {
                us_base: 0.00228571, /* 437.5 grains per avoirdupois ounce; not using troy here (480/oz) */
                si_base: 0.0647989000
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'grains?'
                ]
            },
            up: 'us_dram',
            down: null
        },
        dram: {
            id: 'us_dram',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'dram',
                    plural: 'drams'
                }
            },
            conversions: {
                us_base: 0.0625,
                si_base: 1.7718451953125
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'drams?',
                    'drs?'
                ]
            },
            up: 'us_ounce',
            down: 'us_grain'
        },
        ounce: {
            id: 'us_ounce',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'ounce',
                    plural: 'ounces'
                }
            },
            conversions: {
                us_base: 1,
                si_base: 28.3495231250
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'ounces?',
                    'ozs?'
                ]
            },
            up: 'us_pound',
            down: null
        },
        pound: {
            id: 'us_pound',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'pound',
                    plural: 'pounds'
                }
            },
            conversions: {
                us_base: 16.0000000000,
                si_base: 453.5923700000
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'pounds?',
                    'lbs?',
                ]
            },
            up: null,
            down: 'us_ounce'
        },
        hundredweight: {
            id: 'us_hundredweight',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'hundredweight',
                    plural: 'hundredweights'
                }
            },
            conversions: {
                us_base: 1600.0000000000,
                si_base: 45359.2370000000
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'hundredweights?',
                    'cwts?'
                ]
            },
            up: 'us_ton',
            down: 'us_pound'
        },
        long_hundredweight: {
            id: 'us_long_hundredweight',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'long hundredweight',
                    plural: 'long hundredweights'
                }
            },
            conversions: {
                us_base: 1792.0000000000,
                si_base: 50802.3454400000
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'long hundredweights?',
                    'long cwts?'
                ]
            },
            up: 'us_long_ton',
            down: 'us_pound'
        },
        ton: {
            id: 'us_ton',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'ton',
                    plural: 'tons'
                }
            },
            conversions: {
                us_base: 32000.0000000000,
                si_base: 907184.7400000000
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'tons?',
                    'short tons?'
                ]
            },
            up: null,
            down: 'us_hundredweight'
        },
        long_ton: {
            id: 'us_long_ton',
            system: 'US',
            type: 'mass',
            label: {
                en_us: {
                    single: 'long ton',
                    plural: 'long tons'
                }
            },
            conversions: {
                us_base: 35840.0000000000,
                si_base: 1016046.9088000000
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'long tons?'
                ]
            },
            up: null,
            down: 'us_long_hundredweight'
        },
        inch: {
            id: 'us_inch',
            system: 'US',
            type: 'length',
            label: {
                en_us: {
                    single: 'inch',
                    plural: 'inches'
                }
            },
            conversions: {
                us_base: 1,
                si_base: 0.0254
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'ins?',
                    'inches?'
                ]
            },
            up: null,
            down: null
        }
    },

    si: {
        gram: {
            id: 'si_gram',
            system: 'SI',
            type: 'mass',
            label: {
                en_us: {
                    single: 'gram',
                    plural: 'grams'
                }
            },
            conversions: {
                us_base: 0.0352739619495804,
                si_base: 1
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'grams?',
                    'gs?'
                ]
            },
            up: 'kilogram',
            down: null
        },
        kilogram: {
            id: 'si_kilogram',
            system: 'SI',
            type: 'mass',
            label: {
                en_us: {
                    single: 'kilogram',
                    plural: 'kilograms'
                }
            },
            conversions: {
                us_base: 35.27396194958041,
                si_base: 1000
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'kilograms?',
                    'kgs?'
                ]
            },
            up: 'metric_ton',
            down: 'gram'
        },
        metric_ton: {
            id: 'si_metric_ton',
            system: 'SI',
            type: 'mass',
            label: {
                en_us: {
                    single: 'metric ton',
                    plural: 'metric tons'
                }
            },
            conversions: {
                us_base: 2204.622621848776,
                si_base: 1000000
            },
            commonality: {
                recipes: false
            },
            identifiers: {
                en_us: [
                    'metric tons?',
                    'tonnes?'
                ]
            },
            up: null,
            down: 'si_kilogram'
        },
        milliliter: {
            id: 'si_milliliter',
            system: 'SI',
            type: 'volume',
            label: {
                en_us: {
                    single: 'milliliter',
                    plural: 'milliliters'
                }
            },
            conversions: {
                us_base: 0.033814022701843,
                si_base: 1000
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'milliliters?',
                    'mls?'
                ]
            },
            up: null,
            down: null
        },
        liter: {
            id: 'si_liter',
            system: 'SI',
            type: 'volume',
            label: {
                en_us: {
                    single: 'liter',
                    plural: 'liters'
                }
            },
            conversions: {
                us_base: 33.814,
                si_base: 1
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'liters?',
                    'ls?'
                ]
            },
            up: null,
            down: null
        },
        meter: {
            id: 'si_meter',
            system: 'SI',
            type: 'length',
            label: {
                en_us: {
                    single: 'meter',
                    plural: 'meters'
                }
            },
            conversions: {
                us_base: 0.0254,
                si_base: 1
            },
            commonality: {
                recipes: true
            },
            identifiers: {
                en_us: [
                    'liters?',
                    'ls?'
                ]
            },
            up: null,
            down: null
        }
    },

    si_prefixes: [
        {
            name: 'quetta',
            symbol: 'Q',
            decimal: 1000000000000000000000000000000,
            adoption: 2022
        },
        {
            name: 'ronna',
            symbol: 'R',
            decimal: 1000000000000000000000000000,
            adoption: 2022
        },
        {
            name: 'yotta',
            symbol: 'Y',
            decimal: 1000000000000000000000000,
            adoption: 1991
        },
        {
            name: 'zetta',
            symbol: 'Z',
            decimal: 1000000000000000000000,
            adoption: 1991
        },
        {
            name: 'exa',
            symbol: 'E',
            decimal: 1000000000000000000,
            adoption: 1975
        },
        {
            name: 'peta',
            symbol: 'P',
            decimal: 1000000000000000,
            adoption: 1975
        },
        {
            name: 'tera',
            symbol: 'T',
            decimal: 1000000000000,
            adoption: 1960
        },
        {
            name: 'giga',
            symbol: 'G',
            decimal: 1000000000,
            adoption: 1960
        },
        {
            name: 'mega',
            symbol: 'M',
            decimal: 1000000,
            adoption: 1873
        },
        {
            name: 'kilo',
            symbol: 'k',
            decimal: 1000,
            adoption: 1795
        },
        {
            name: 'hecto',
            symbol: 'h',
            decimal: 100,
            adoption: 1795
        },
        {
            name: 'deca',
            symbol: 'da',
            decimal: 10,
            adoption: 1795
        },
        {
            name: 'deci',
            symbol: 'd',
            decimal: 0.1,
            adopted: 1795
        },
        {
            name: 'centi',
            symbol: 'c',
            decimal: 0.01,
            adopted: 1795
        },
        {
            name: 'milli',
            symbol: 'm',
            decimal: 0.001,
            adopted: 1795
        },
        {
            name: 'micro',
            symbol: 'μ',
            decimal: 0.000001,
            adopted: 1873
        },
        {
            name: 'nano',
            symbol: 'n',
            decimal: 0.000000001,
            adopted: 1960
        },
        {
            name: 'pico',
            symbol: 'p',
            decimal: 0.000000000001,
            adopted: 1960
        },
        {
            name: 'femto',
            symbol: 'f',
            decimal: 0.000000000000001,
            adopted: 1964
        },
        {
            name: 'atto',
            symbol: 'a',
            decimal: 0.000000000000000001,
            adopted: 1964
        },
        {
            name: 'zepto',
            symbol: 'z',
            decimal: 0.000000000000000000001,
            adopted: 1991
        },
        {
            name: 'yocto',
            symbol: 'y',
            decimal: 0.000000000000000000000001,
            adopted: 1991
        },
        {
            name: 'ronto',
            symbol: 'r',
            decimal: 0.000000000000000000000000001,
            adopted: 2022
        },
        {
            name: 'quecto',
            symbol: 'q',
            decimal: 0.000000000000000000000000000001,
            adopted: 2022
        }

    ],

/*
    identifiers: {
        en_us: [
            ['drops?', 'us_drop'],
            ['gtt?s?', 'us_drop'],
            ['minims?', 'us_minim'],
            ['mins?', 'us_minim'],
            ['fluid drams?', 'us_fluid_dram'],
            ['fluidrams?', 'us_fluid_dram'],
            ['fl drams?', 'us_fluid_dram'],
            ['fl drs?', 'us_fluid_dram'],
            ['teaspoons?', 'us_teaspoon'],
            ['tsps?', 'us_teaspoon'],
            ['tablespoons?', 'us_tablespoon'],
            ['tbsps?', 'us_tablespoon'],
            ['fluid ounces?', 'us_fluid_ounce'],
            ['fl ounces?', 'us_fluid_ounce'],
            ['fl ozs?', 'us_fluid_ounce'],
            ['shots?', 'us_shot'],
            ['jigs?', 'us_shot'],
            ['gills?', 'us_gill'],
            ['gis?', 'us_gill'],
            ['cups?', 'us_cup'],
            ['cps?', 'us_cup'],
            ['cs?', 'us_cup'],
            ['pints?', 'us_pint'],
            ['pts?', 'us_pint'],
            ['quarts?', 'us_quart'],
            ['qts?', 'us_quart'],
            ['gallons?', 'us_gallon'],
            ['gals?', 'us_gallon'],
            ['barrels?', 'us_barrel'],
            ['bbls?', 'us_barrel'],
            ['hogsheads?', 'us_hogshead'],
            ['grains?', 'us_grain'],
            ['drams?', 'us_dram'],
            ['drs?', 'us_dram'],
            ['ounces?', 'us_ounce'],
            ['ozs?', 'us_ounce'],
            ['pounds?', 'us_pound'],
            ['lbs?', 'us_pound'],
            ['hundredweights?', 'us_hundredweight'],
            ['cwts?', 'us_hundredweight'],
            ['long hundredweights?', 'us_long_hundredweight'],
            ['long cwts?', 'us_long_hundredweight'],
            ['tons?', 'us_ton'],
            ['short tons?', 'us_ton'],
            ['long tons?', 'us_long_ton']
        ]
    }
 */
};

Measurements.us.drop.up = Measurements.us.teaspoon;
Measurements.us.minim.up = Measurements.us.teaspoon;
Measurements.us.fluid_dram.up = Measurements.us.teaspoon;
Measurements.us.teaspoon.up = Measurements.us.tablespoon;
Measurements.us.teaspoon.down = Measurements.us.drop;
Measurements.us.tablespoon.up = Measurements.us.fluid_ounce;
Measurements.us.tablespoon.down = Measurements.us.teaspoon;
Measurements.us.fluid_ounce.up = Measurements.us.cup;
Measurements.us.fluid_ounce.down = Measurements.us.tablespoon;
Measurements.us.shot.up = Measurements.us.cup;
Measurements.us.shot.down = Measurements.us.fluid_ounce;
Measurements.us.gill.up = Measurements.us.cup;
Measurements.us.gill.down = Measurements.us.fluid_ounce;
Measurements.us.cup.up = Measurements.us.pint;
Measurements.us.cup.down = Measurements.us.fluid_ounce;
Measurements.us.pint.up = Measurements.us.quart;
Measurements.us.pint.down = Measurements.us.cup;
Measurements.us.quart.up = Measurements.us.gallon;
Measurements.us.quart.down = Measurements.us.pint;
Measurements.us.gallon.up = Measurements.us.barrel;
Measurements.us.gallon.down = Measurements.us.quart;
Measurements.us.barrel.up = Measurements.us.hogshead;
Measurements.us.barrel.down = Measurements.us.gallon;
Measurements.us.hogshead.down = Measurements.us.barrel;

Measurements.us.grain.up = Measurements.us.dram;
Measurements.us.dram.up = Measurements.us.ounce;
Measurements.us.dram.down = Measurements.us.dram;
Measurements.us.ounce.up = Measurements.us.pound;
Measurements.us.pound.up = Measurements.us.ton;
Measurements.us.pound.down = Measurements.us.ounce;
Measurements.us.hundredweight.down = Measurements.us.pound;
Measurements.us.long_hundredweight.down = Measurements.us.pound;
Measurements.us.ton.down = Measurements.us.pound;
Measurements.us.long_ton.down = Measurements.us.pound;

Measurements.si.gram.up = Measurements.si.kilogram;
Measurements.si.kilogram.down = Measurements.si.gram;

Measurements.baseMeasurements = {
    volume: {
        us_base: Measurements.us.fluid_ounce,
        si_base: Measurements.si.milliliter
    },
    mass: {
        us_base: Measurements.us.ounce,
        si_base: Measurements.si.gram
    },
    length: {
        us_base: Measurements.us.inch,
        si_base: Measurements.us.meter
    }
};

Measurements.all = Object.assign(Measurements.us, Measurements.si);

Measurements.getIdentifiersRegex = () => {
    var reg = [];
    Object.keys(Measurements.all).forEach((o, i) => {
        reg.push(Measurements.all[o].identifiers.en_us.join('|'));
    });

    return reg.join('|');
}

export default Measurements;
