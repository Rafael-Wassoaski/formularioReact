import React, {Fragment, useState} from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryForm from "./DeliveryForm";

function SignInForm({aoEnviar, validaCPF}) {


    return (
        <Fragment>
            <PersonalData aoEnviar={aoEnviar} validaCPF={validaCPF}/>
            <UserData/>
            <DeliveryForm/>
        </Fragment>
    )
}

export default SignInForm;