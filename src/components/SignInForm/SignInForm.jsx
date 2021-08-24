import React, {Fragment, useState} from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryForm from "./DeliveryForm";

function SignInForm({aoEnviar, validaCPF}) {
    const [actualStep, setActualStep] = useState(0);
    const forms = [
        <UserData aoEnviar={setNextForm}/>,
        <PersonalData aoEnviar={setNextForm} validaCPF={validaCPF}/>,
        <DeliveryForm aoEnviar={aoEnviar}/>
    ];

    function setNextForm() {
        if (actualStep < 2) {
            setActualStep(actualStep + 1);
        }
    }

    return (
        <Fragment>
            {forms[actualStep]}
        </Fragment>
    )
}

export default SignInForm;