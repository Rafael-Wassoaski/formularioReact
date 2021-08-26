import React, {Fragment, useEffect, useState} from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryForm from "./DeliveryForm";
import {Step, StepLabel, Stepper, Typography} from "@material-ui/core";

function SignInForm({aoEnviar, validaCPF}) {
    const [actualStep, setActualStep] = useState(0);
    const [collectedData, setCollectedData] = useState({});

    const forms = [
        <UserData aoEnviar={getData}/>,
        <PersonalData aoEnviar={getData} validaCPF={validaCPF}/>,
        <DeliveryForm aoEnviar={getData}/>,
        <Typography variant='h5'>Obrigado por se cadastrar</Typography>
    ];

    useEffect(() => {
        if (actualStep === forms.length - 1) {
            aoEnviar(collectedData);
        }
    })

    function getData(data) {
        setCollectedData({...collectedData, ...data});
        setNextForm();
    }

    function setNextForm() {
        setActualStep(actualStep + 1);
    }

    return (
        <Fragment>
            <Stepper activeStep={actualStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Dados Pessoais</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {forms[actualStep]}
        </Fragment>
    )
}

export default SignInForm;