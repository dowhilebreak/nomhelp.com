import React, { Component } from 'react';
import Utilities from '../common/Utilities';
import Translations from '../common/Translations';
import Measurements from '../common/Measurements';
import '../styles/components/Multiplier.scss';
import * as math from 'mathjs';
import Subheader from "./Subheader";

class Multiplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localization: props.localization || 'en_us',
            formraw_recipe: '',
            formraw_multiplier: 1,
            formraw_multiplier_custom: '',
            formraw_target_measurement_system: 'us_base',
            converted_recipe: [],
            ingredient_calculations: [],
            option_auto_calculate: true,
            feature_button_calculate: false,
            feature_optimized_measurements: true
        };

        let fractionRegex = '((?:([0-9]+\\s+)?[1-9][0-9]*?\\/[1-9][0-9]*?)';
        let vulgarFractionRegex = '([0-9]*\\s*?[' + Translations.vulgarFractionUnicodeSet + '])';
        let decimalRegex = '([0-9]*\\.?[0-9]+)'

        let baseRegexText = '(' + fractionRegex + '|' + vulgarFractionRegex + '|' + decimalRegex + ')[\\s]*?';

        window.Measurements = Measurements;
        let ingredientRegexText = baseRegexText + '\\b(' + Measurements.getIdentifiersRegex(this.getLocalization()) + ')\\b)'; //(\s+|\r?\n|$)
        this.ingredientRegex = new RegExp(ingredientRegexText, 'igm');

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    /**
     * TODO: Placeholder for cultural spelling variants
     * @returns {string}
     */
    getLocalization() {
        return this.state.localization;
    }

    getTargetMeasurementSystem() {
        return this.state.formraw_target_measurement_system || 'us_base';
    }

    /**
     * Bare-bones feature flag helper function. Uses current state.
     * @param feature_name
     * @returns {*|boolean}
     */
    hasFeature(feature_name) {
        let feature = this.state['feature_' + feature_name];
        return feature || false;
    }

    /**
     * Generic change handler used for all form inputs.
     * @param event
     */
    handleChange(event) {
        let o = {};
        let key = 'formraw_' + event.target.name;

        if(typeof this.state[key] === 'undefined') { return; }

        let input_value = event.target.value;
        if(event.target.name === 'multiplier_custom') {
            /*
            let found_multiplier = /([0-9\.]*)/m.exec(event.target.value);
            if(found_multiplier) {
                let parsed = parseFloat(found_multiplier[0]);
                if(parsed && parsed > 0 && parsed <= 1000) {
                    input_value = parsed;
                } else {
                    input_value = this.state[key];
                }
            }
            */
        } else if (event.target.name === 'target_measurement_system') {

        }

        o[key] = input_value;
        this.setState(o, () => {
            /* Whenever something material changes, regenerate the conversion after state has updated. */
            this.processRecipe(this.state.formraw_recipe);
        });
    }

    /**
     * Generic blur handler, but only utilized for user input of recipe so far.
     * @param event
     */
    handleBlur(event) {
        let o = {};
        let key = 'formraw_' + event.target.name;
        let input_value = event.target.value;
        if(event.target.name === 'recipe') {
            input_value = input_value.replace(/^\s+|\s+$/mg, '')
        }
        o[key] = input_value;
        this.setState(o);
    }

    /**
     * Generates recipe conversion on form submit. Not actively used right now.
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ conversions: this.processRecipe(this.state.formraw_recipe)});
    }

    /**
     * Empties the contents of the recipe textarea.
     * @param event
     */
    handleClear(event) {
        this.setState({ formraw_recipe: '' });
    }

    /**
     * If the submit button is visible, but auto-calculation is on then we need different text.
     * @returns {string}
     */
    getSubmitButtonText() {
        return this.state.option_auto_calculate ? 'Auto-Calculating...' : 'Calculate';
    }

    getConvertedRecipeText() {
        let default_message = 'Enter a recipe above!';
        return this.state.converted_recipe.length > 0 ? this.state.converted_recipe : default_message;
    }

    /**
     * Gets the recipe size multiplier from the available options.
     * @returns {number}
     */
    getMultiplier() {
        let multiplier = parseFloat(this.state.formraw_multiplier) || 1;
        if(multiplier === -1) {
            let found_custom_multiplier = /([0-9.]*)/m.exec(this.state.formraw_multiplier_custom);
            if(found_custom_multiplier) {
                let parsed = parseFloat(found_custom_multiplier[0]);
                if(parsed && parsed > 0 && parsed < 10000) {
                    return parsed;
                }
            }
            multiplier = 1;
        }
        return multiplier;
    }

    /**
     * Used to convert ingredient quantities to usable numbers. Specifically, translates vulgar fractions.
     * @param value
     * @returns {*|number}
     */
    parseNumericalInput(value) {
        let raw = value;
        let out = 0;

        let r = new RegExp('[' + Translations.vulgarFractionUnicodeSet + ']', 'g');
        if(r.test(raw)) {
            let first = raw.substr(0, raw.length - 1);
            if(first.length < 1) {
                first = 0;
            }
            let fraction = raw.substr(raw.length - 1);
            let decimal = Translations.vulgarFractionTranslations[fraction];
            out = math.fraction(parseInt(first) + decimal);
        } else {
            out = math.fraction(raw); /* Whole numbers can still be expressed as fractions and this makes future calculations easier */
            if(raw.includes('3/4')) {
            console.log('parseNumericalInput out value:', out);
            }
        }

        return out;
    }

    /**
     * Takes the incoming recipe, breaks it into lines and processes them for convertible quantities.
     * @param input
     * @returns {*[]}
     */
    processRecipe(input) {
        let component = this;
        let exploded_input = input.trim().split(/[\r?\n]+/);
        let ingredients = [];

        exploded_input.forEach((el,i) => {
            let x;
            while((x = component.ingredientRegex.exec(el)) !== null) {
                console.log('Component regex output:', x);
                let quantity = component.parseNumericalInput(x[2].trim());
                let last_index = component.ingredientRegex.lastIndex;
                let vals = [i, x[1], quantity, x[6], [last_index - x[0].length, last_index]];
                ingredients.push(vals);
            }
        });

        let base_calculations = this.generateBaseCalculations(ingredients);
        let converted_recipe = this.generateTransformedRecipe(exploded_input, base_calculations);

        this.setState({
            ingredient_calculations: base_calculations,
            converted_recipe: converted_recipe
        });
    }

    /**
     * Takes an array of ingredients, converts the quantities to base units and then scales the
     * quantity based on the multiplier.
     * @param ingredients
     * @returns {Array}
     */
    generateBaseCalculations(ingredients) {
        let component = this;
        let multiplier = this.getMultiplier();
        let system = this.getTargetMeasurementSystem();
        return ingredients.map((el) => {
            let measurement = null;
            let measurement_keys = Object.keys(Measurements.all);
            for(let key in measurement_keys){
                let m =  Measurements.all[measurement_keys[key]]; /* TODO: internationalize */
                let regex = new RegExp(m.identifiers.en_us.join('|'), 'gi');
                let result = regex.exec(el[3]);
                if(result && result[0] === el[3]) {
                    measurement = m;
                    break;
                }
            }

            if (measurement == null) {
               console.error('no measurement found!');
            }
            /*
            for(var i = 0; i < Object.keys(Measurements.all).length; i++) {
                let m =  Measurements.all[i].identifiers.en_us;
                let regex = new RegExp(m.map((el) => { return el[0];}).join('|'), 'gi');
                let result = regex.exec(el[3]);
                if(result && result[0] === el[3]) {
                    measurement_name = m[1];
                    break;
                }
            }
             */

            let base_calculation = el[2].mul(measurement.conversions[system]);
            let multiplied_base = base_calculation.mul(multiplier);
            let label = Measurements.baseMeasurements[measurement.type][system].label[component.getLocalization()][multiplied_base > 1 ? 'plural' : 'single'];
            let optimized = component.hasFeature('optimized_measurements') ? component.getOptimizedMeasurements(measurement, multiplied_base) : null;

            //return [el[0], multiplied_base.toFraction(true) + " " + label, optimized, el[4]];

            let translated_quantity = ( system === 'si_base' ) ? multiplied_base.round() : multiplied_base.round(3).toFraction(true);

            return {
                input_line: el[0],
                base_result: translated_quantity + " " + label,
                original_text: el[1],
                optimized_measurements: optimized,
                text_indices: el[4]
            };
        });
    }

    /**
     * Takes the original recipe text and replaces the original quantity + measurement pairs with the converted
     * base values.
     * @param exploded_input
     * @param base_calculations
     * @returns {Array}
     */
    generateConvertedRecipeText(exploded_input, base_calculations) {
        return exploded_input.map((line, i) => {
            let out = line;
            let filtered = base_calculations.filter((o) => { return o.input_line === i; }).reverse();
            filtered.forEach((ingredient) => {
                console.log('Result row:', ingredient);
                let replacement = ingredient.base_result;
                let original = ingredient.original_text;
                /* TODO: Fails because I'm trying to add markup to the output and JSX can't be substringed in Utilities */
                out = Utilities.spliceString(out, ingredient.text_indices[0], ingredient.text_indices[1], replacement, original);
            });
            return out;
        });
    }


    generateTransformedRecipe(exploded_input, base_calculations) {
        let lines = [];
        exploded_input.forEach((line, i) => {
            let filtered = base_calculations.filter((o) => { return o.input_line === i; }).reverse();
            let reserve = line;
            let chunks = [];
            let element = (
                <div className={"wrapper"}>
                {
                    filtered.forEach((ingredient) => {
                        console.log('Result row:', ingredient);
                        let replacement = ingredient.base_result;
                        let original = ingredient.original_text;
                        let tail = reserve.substring(ingredient.text_indices[1]);
                        chunks.push(Utilities.createRecipeLine(replacement, original, tail));
                        reserve = line.substring(0, ingredient.text_indices[0]);
                    })
                }
                    {reserve}
                    {chunks.reverse()}
                </div>
            );
            lines.push(element);
        });
        return lines;
    }




    /**
     * Recursively crawls the measurement tree/hierarchy to create an optimized sequence
     * of named measures that equal the original base quantity.
     * @param measurement
     * @param quantity
     * @param findings
     * @returns {Array}
     */
    getOptimizedMeasurements(measurement, quantity, findings = []) {
        let measure = Utilities.isString(measurement) ? Measurements.all[measurement] : measurement;
        let system = this.getTargetMeasurementSystem();
        if(measure.up && quantity >= measure.up.conversions[system]) {
            findings = this.getOptimizedMeasurements(measure.up, quantity, findings);
        } else {
            let units = quantity.div(measure.conversions[system]);
            let remainder = units.mod(1).mul(measure.conversions[system]);
            if(units.floor() > 0 || !measure.down) {
                let value = !measure.down ? units.round(3) : units.floor();
                findings.push(value + " " + measure.label[this.getLocalization()][units.floor() > 1 ? 'plural' : 'single']);
            }
            if(measure.down && remainder && remainder.n > 0) {
                findings = this.getOptimizedMeasurements(measure.down, remainder, findings);
            } else if (!measure.down) {
                console.error('Encountered measurement without a down value:', measurement, quantity, findings);
            }
        }

        return findings;
    }

    render() {
        return (
            <div className="multiplier-container col-sm-12">
                <div className="row">
                    <Subheader headline="Convert A US Mixed-Measurement Recipe into Fluid Ounces & Pounds (Experimental!)"/>
                </div>
                <div className="row">
                    <div className="col-lg-1 col-xl-2" />
                    <div className="col-md-12 col-lg-10 col-xl-8">
                        <div className="row form-wrapper">
                            <form onSubmit={this.handleSubmit} className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8 col-sm-12">
                                        <div className="form-group">
                                            <label>
                                                <h3>Type or Copy/Paste your ingredient list here:</h3>
                                                <div>
                                                    <textarea name="recipe" value={this.state.formraw_recipe} onChange={this.handleChange} onBlur={this.handleBlur} className="col-md-12 form-control" />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="text-right">
                                            <input type="button" value="Clear" className="btn btn-link" onClick={this.handleClear} />
                                            {
                                                (this.hasFeature('button_calculation') &&
                                                    <input type="submit" value={this.getSubmitButtonText()} disabled={this.state.option_auto_calculate} className="btn btn-primary" onClick={this.handleSubmit} />
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <h3>Increase the quantity?</h3>
                                        <div className="options-container">
                                            <div className="form-check">
                                                <label className={"col-md-12"}>
                                                    <input type="radio" name="multiplier" value="2" onChange={this.handleChange} /> double the recipe
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className={"col-md-12"}>
                                                    <input type="radio" name="multiplier" value="3" onChange={this.handleChange} /> triple it
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className={"col-md-12"}>
                                                    <input type="radio" name="multiplier" value=".5" onChange={this.handleChange} /> halve it
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className={"col-md-12"}>
                                                    <input type="radio" name="multiplier" value="-1" onChange={this.handleChange} /> multiply it by this amount: <input type="text" name="multiplier_custom" value={this.state.formraw_multiplier_custom} onChange={this.handleChange} placeholder="1" className="form-control custom-multiplier" maxLength={4} />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className={"col-md-12"}>
                                                    <input type="radio" name="multiplier" value="1" onChange={this.handleChange} checked={this.state.formraw_multiplier == 1} /> no, keep it as is...
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <h3>Here it is using <select name="target_measurement_system" onChange={this.handleChange}><option name="us" value="us_base" selected={this.state.formraw_target_measurement_system === 'us_base'}>US Customary</option><option name="si" value="si_base" selected={this.state.formraw_target_measurement_system === 'si_base'}>International (Metric)</option></select> measurements:</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="converted-recipe-text form-control wd-100">
                                {
                                    this.state.converted_recipe.map((o, i) => {
                                        return (
                                            <div className="recipe-line" key={i}>{o}</div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                            <div className="conversions-container col-md-4 col-sm-12" hidden={this.state.ingredient_calculations.length < 1}>
                                <h5>Conversions:</h5>
                                <div className="optimized-measurements-container">
                                    {
                                        this.state.ingredient_calculations.map((o, i) => {
                                            return (
                                                <div className="conversion-item col-md-12" key={i}>{o.base_result} = {o.optimized_measurements.join(' + ')}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-xl-2" />
                </div>
            </div>
        );
    }
}

export default Multiplier;
