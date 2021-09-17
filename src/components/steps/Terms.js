import React from 'react';

class Terms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            terms: this.props.terms,
        };

        this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

        this.validationCheck = this.validationCheck.bind(this);
        this.isValidated = this.isValidated.bind(this);
    }

    isValidated() {
        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator
        let isDataValid = false;

        // if full validation passes then save to store and pass as valid
        if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
            if (this.props.getStore().terms != userInput.terms) { // only update store of something changed
                this.props.updateStore({
                    ...userInput,
                    savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
                });  // Update store here (this is just an example, in reality you will do it via redux or flux)
            }

            isDataValid = true;
        }
        else {
            // if anything fails then update the UI validation state but NOT the UI Data State
            this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
        }

        return isDataValid;
    }

    validationCheck() {
        if (!this._validateOnDemand)
            return;

        const userInput = this._grabUserInput(); // grab user entered vals
        const validateNewInput = this._validateData(userInput); // run the new input against the validator

        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    _validateData(data) {
        return {
            termsVal: (data.terms != false), // required: anything besides N/A
        }
    }

    _validationErrors(val) {
        const errMsgs = {
            termValMsg: val.termVal ? '' : 'Accept terms to continue',
        }
        return errMsgs;
    }

    _grabUserInput() {
        return {
            terms: this.refs.terms.value,
        };
    }

    render() {
        // explicit class assigning based on validation
        let notValidClasses = {};

        if (typeof this.state.termVal == 'undefined' || this.state.term) {
            notValidClasses.termCls = 'no-error col-md-8';
        }
        else {
            notValidClasses.termCls = 'invalid-feedback col-md-8';
            notValidClasses.termValGrpCls = 'val-err-tooltip';
        }

        return (
            <div className="step step3">
                <div className="row">
                    <form id="Form" className="form-horizontal">

                        <p>
                            A Terms and Conditions agreement is not legally required. However, having one
                            comes with a number of important benefits for both you and your users/customers.
                            The benefits include increasing your control over your business/platform,
                            while helping your users understand your rules, requirements and restrictions.
                        </p>

                        <div className="form-group form-check mb-3">
                            <input type="checkbox" ref="terms" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1" onBlur={this.validationCheck} defaultValue={this.state.terms}>Accept</label>
                            <div className={notValidClasses.termValGrpCls}>{this.state.termValMsg}</div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Terms;