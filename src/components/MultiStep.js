import react from 'react';
import { About, Terms, ConsentForm } from './steps/steps';
import StepZilla from "react-stepzilla";

const steps =
    [
        { name: 'About', component: <About /> },
        { name: 'Terms', component: <Terms /> },
        { name: 'Consent', component: <ConsentForm /> },
    ]

const MultiSteps = () => {

    return (
        <div className='step-progress'>
            <StepZilla steps={steps} />
        </div>
    );
}

export default MultiSteps;