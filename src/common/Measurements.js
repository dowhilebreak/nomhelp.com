const Measurements = {
    us: {
        us_drop: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'drop',
                    plural: 'drops'
                }
            },
            conversions: {
                us_base: 1/480,
                si_base: 0.0000616115
            },
            up: 'us_teaspoon',
            down: null
        },
        us_minim: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'minim',
                    plural: 'minims'
                }
            },
            conversions: {
                us_base: 1/480,
                si_base: 0.0000616115
            },
            up: 'us_teaspoon',
            down: null
        },
        us_fluid_dram: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'fluid dram',
                    plural: 'fluid drams'
                }
            },
            conversions: {
                us_base: 0.1250000000,
                si_base: 0.0036966900
            },
            up: 'us_teaspoon',
            down: 'us_drop'
        },
        us_teaspoon: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'teaspoon',
                    plural: 'teaspoons'
                }
            },
            conversions: {
                us_base: 1/6,
                si_base: 0.0049289200
            },
            up: 'us_tablespoon',
            down: 'us_drop'
        },
        us_tablespoon: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'tablespoon',
                    plural: 'tablespoons'
                }
            },
            conversions: {
                us_base: 0.5000000000,
                si_base: 0.0147868000
            },
            up: 'us_fluid_ounce',
            down: 'us_teaspoon'
        },
        us_fluid_ounce: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'fluid ounce',
                    plural: 'fluid ounces'
                }
            },
            conversions: {
                us_base: 1.0000000000,
                si_base: 0.0295735000
            },
            up: 'us_cup',
            down: 'us_tablespoon'
        },
        us_shot: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'shot',
                    plural: 'shots'
                }
            },
            conversions: {
                us_base: 1.5000000000,
                si_base: 0.0443602500
            },
            up: 'us_cup',
            down: 'us_fluid_ounce'
        },
        us_gill: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'gill',
                    plural: 'gills'
                }
            },
            conversions: {
                us_base: 4.0000000000,
                si_base: 0.1182940000
            },
            up: 'us_cup',
            down: 'us_fluid_ounce'
        },
        us_cup: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'cup',
                    plural: 'cups'
                }
            },
            conversions: {
                us_base: 8.0000000000,
                si_base: 0.2365880000
            },
            up: 'us_pint',
            down: 'us_fluid_ounce'
        },
        us_pint: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'pint',
                    plural: 'pints'
                }
            },
            conversions: {
                us_base: 16.0000000000,
                si_base: 0.4731760000
            },
            up: 'us_quart',
            down: 'us_cup'
        },
        us_quart: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'quart',
                    plural: 'quarts'
                }
            },
            conversions: {
                us_base: 32.0000000000,
                si_base: 0.9463520000
            },
            up: 'us_gallon',
            down: 'us_pint'
        },
        us_gallon: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'gallon',
                    plural: 'gallons'
                }
            },
            conversions: {
                us_base: 128.0000000000,
                si_base: 3.7854080000
            },
            up: 'us_barrel',
            down: 'us_quart'
        },
        us_barrel: {
            label: {
                en_us: {
                    single: 'barrel',
                    plural: 'barrels'
                }
            },
            type: 'volume',
            conversions: {
                us_base: 4032.0000000000,
                si_base: 119.2403520000
            },
            up: 'us_hogshead',
            down: 'us_gallon'
        },
        us_hogshead: {
            type: 'volume',
            label: {
                en_us: {
                    single: 'hogshead',
                    plural: 'hogsheads'
                }
            },
            conversions: {
                us_base: 8064.0000000000,
                si_base: 238.4807040000
            },
            up: null,
            down: 'us_barrel'
        },
        us_grain: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'grain',
                    plural: 'grains'
                }
            },
            conversions: {
                us_base: 0.0001428571,
                si_base: 0.0647989000
            },
            up: 'us_dram',
            down: null
        },
        us_dram: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'dram',
                    plural: 'drams'
                }
            },
            conversions: {
                us_base: 0.0039062500,
                si_base: 1.7718500000
            },
            up: 'us_ounce',
            down: 'us_grain'
        },
        us_ounce: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'ounce',
                    plural: 'ounces'
                }
            },
            conversions: {
                us_base: 0.0625000000,
                si_base: 28.3495231250
            },
            up: 'us_pound',
            down: null
        },
        us_pound: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'pound',
                    plural: 'pounds'
                }
            },
            conversions: {
                us_base: 1.0000000000,
                si_base: 453.5923700000
            },
            up: 'us_hundredweight',
            down: 'us_ounce'
        },
        us_hundredweight: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'hundredweight',
                    plural: 'hundredweights'
                }
            },
            conversions: {
                us_base: 100.0000000000,
                si_base: 45359.2370000000
            },
            up: 'us_ton',
            down: 'us_pound'
        },
        us_long_hundredweight: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'long hundredweight',
                    plural: 'long hundredweights'
                }
            },
            conversions: {
                us_base: 112.0000000000,
                si_base: 50802.3454400000
            },
            up: 'us_long_ton',
            down: 'us_pound'
        },
        us_ton: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'ton',
                    plural: 'tons'
                }
            },
            conversions: {
                us_base: 2000.0000000000,
                si_base: 907184.7400000000
            },
            up: null,
            down: 'us_hundredweight'
        },
        us_long_ton: {
            type: 'mass',
            label: {
                en_us: {
                    single: 'long ton',
                    plural: 'long tons'
                }
            },
            conversions: {
                us_base: 2240.0000000000,
                si_base: 1016046.9088000000
            },
            up: null,
            down: 'us_long_hundredweight'
        }
    },

    baseMeasurements: {
        volume: {
            us_base: 'us_fluid_ounce',
            si_base: 'si_liter'
        },
        mass: {
            us_base: 'us_pound',
            si_base: 'si_gram'
        }
    },

    identifiers: [
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
};

Measurements.all = Object.assign(Measurements.us); /* TODO: add metric */

export default Measurements;