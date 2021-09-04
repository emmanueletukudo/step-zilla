import react from 'react';
import { About, Terms, ConcentForm } from './steps/steps';
import StepZilla from "react-stepzilla";

const steps =
    [
        { name: 'About', component: <About /> },
        { name: 'Terms', component: <Terms /> },
        { name: 'Concent', component: <ConcentForm /> },
    ]

const MultiSteps = () => {

    return (
        <div className='step-progress'>
            <StepZilla steps={steps} />
        </div>
    );
}

export default MultiSteps;