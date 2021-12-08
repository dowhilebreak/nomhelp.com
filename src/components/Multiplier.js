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
            converted_recipe: [],
            ingredient_calculations: [],
            option_auto_calculate: true,
            feature_button_calculate: false,
            feature_optimized_measurements: true
        };

        let baseRegexText = '((([0-9]*\\.?[0-9]+)|([0-9]*\\s*?[' + Translations.vulgarFractionUnicodeSet + '])|([0-9]*\\s+[1-9][0-9]*?\\/[1-9][0-9]*?))[\\s]*?';
        let ingredientRegexText = baseRegexText + '\\b(' + Measurements.identifiers.map((el) => { return el[0];} ).join('|') + ')\\b)'; //(\s+|\r?\n|$)
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
                let quantity = component.parseNumericalInput(x[2].trim());
                let last_index = component.ingredientRegex.lastIndex;
                let vals = [i, x[1], quantity, x[6], [last_index - x[0].length, last_index]];
                ingredients.push(vals);
            }
        });

        let base_calculations = this.generateBaseCalculations(ingredients);
        let converted_recipe = this.generateConvertedRecipeText(exploded_input, base_calculations);

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
        return ingredients.map((el) => {
            let measurement_name = null;
            for(var i = 0; i < Measurements.identifiers.length; i++) {
                let m =  Measurements.identifiers[i];
                let regex = new RegExp(m[0], 'gi');
                let result = regex.exec(el[3]);
                if(result && result[0] === el[3]) {
                    measurement_name = m[1];
                    break;
                }
            }

            let measurement_config = Measurements.all[measurement_name];
            let base_calculation = el[2].mul(measurement_config.conversions.us_base);
            let multiplied_base = base_calculation.mul(multiplier);
            let label = Measurements.all[Measurements.baseMeasurements[measurement_config.type].us_base].label[component.getLocalization()][multiplied_base > 1 ? 'plural' : 'single'];
            let optimized = component.hasFeature('optimized_measurements') ? component.getOptimizedMeasurements(measurement_name, multiplied_base) : null;

            //return [el[0], multiplied_base.toFraction(true) + " " + label, optimized, el[4]];

            return {
                input_line: el[0],
                base_result: multiplied_base.toFraction(true) + " " + label,
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
                let replacement = ingredient.base_result;
                out = Utilities.spliceString(out, ingredient.text_indices[0], ingredient.text_indices[1], replacement);
            });
            return out;
        });
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
        let measure = Measurements.all[measurement];
        let up_measure = Measurements.all[measure.up];

        if(up_measure && quantity >= up_measure.conversions.us_base) {
            findings = this.getOptimizedMeasurements(measure.up, quantity, findings);
        } else {
            let units = quantity.div(measure.conversions.us_base);
            let remainder = units.mod(1).mul(measure.conversions.us_base);
            if(units.floor() > 0) {
                findings.push(units.floor() + " " + measure.label[this.getLocalization()][units.floor() > 1 ? 'plural' : 'single']);
            }
            if(measure.down && remainder && remainder.n > 0) {
                findings = this.getOptimizedMeasurements(measure.down, remainder, findings);
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
                                <h3>Here's your converted recipe:</h3>
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