import react, { useState } from 'react';
import { About, Terms, ConsentForm } from './steps/steps';
import StepZilla from "react-stepzilla";



const MultiSteps = () => {
    const steps =
        [
            { name: 'About', component: <About /> },
            { name: 'Terms', component: <Terms /> },
            { name: 'Consent', component: <ConsentForm /> },
        ]
    return (
        <div className='step-progress'>
            <StepZilla steps={steps} hocValidationAppliedTo={[2]} />
        </div>
    );
}

export default MultiSteps;