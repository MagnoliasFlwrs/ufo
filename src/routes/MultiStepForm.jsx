import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const steps = ['Раздел 1', 'Раздел 2', 'Раздел 3', 'Раздел 4', 'Раздел 5'];
const subSteps = [3, 4, 2, 5, 3];

const CustomStepConnector = styled(StepConnector)(({ theme, progress, isCompleted }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`& .${stepConnectorClasses.line}`]: {
        position: 'relative',
        height: 3,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
        overflow: 'hidden',

        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: isCompleted ? '100%' : `${progress}%`,
            height: '100%',
            backgroundColor: theme.palette.primary.main,
            transition: 'width 0.3s ease-in-out',
        },
    },
}));

const MultiStepForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [activeSubStep, setActiveSubStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState({});

    const handleNext = () => {
        if (activeSubStep < subSteps[activeStep] - 1) {
            setActiveSubStep((prev) => prev + 1);
        } else {
            setCompletedSteps((prev) => ({ ...prev, [activeStep]: true }));
            if (activeStep < steps.length - 1) {
                setActiveStep((prev) => prev + 1);
                setActiveSubStep(0);
            }
        }
    };

    const handleBack = () => {
        if (activeSubStep > 0) {
            setActiveSubStep((prev) => prev - 1);
        } else if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
            setActiveSubStep(subSteps[activeStep - 1] - 1);
        }
    };

    const getStepProgress = (stepIndex) => {
        if (completedSteps[stepIndex]) return 100;
        return stepIndex === activeStep ? ((activeSubStep + 1) / subSteps[stepIndex]) * 100 : 0;
    };

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep} connector={null}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completedSteps[index]}>
                        <StepLabel>{label}</StepLabel>
                        {index < steps.length - 1 && (
                            <CustomStepConnector
                                progress={getStepProgress(index)}
                                isCompleted={completedSteps[index]}
                            />
                        )}
                    </Step>
                ))}
            </Stepper>

            <Typography variant="h6" style={{ margin: '20px 0' }}>
                {steps[activeStep]} - Подраздел {activeSubStep + 1} из {subSteps[activeStep]}
            </Typography>

            <div>
                <Button disabled={activeStep === 0 && activeSubStep === 0} onClick={handleBack}>
                    Назад
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 && activeSubStep === subSteps[activeStep] - 1
                        ? 'Завершить'
                        : activeSubStep === subSteps[activeStep] - 1
                            ? 'Следующий раздел'
                            : 'Следующий подраздел'}
                </Button>
            </div>
        </div>
    );
};

export default MultiStepForm;
