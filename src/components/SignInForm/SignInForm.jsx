import React from "react";
import {Button, InputLabel, Input, Checkbox  } from "@material-ui/core";

function SignInForm() {
    return (
        <form>
            <InputLabel>Nome</InputLabel>
            <Input type='text' color='primary'/>

            <InputLabel>Sobrenome</InputLabel>
            <Input type='text'  color='primary'/>

            <InputLabel>CPF</InputLabel>
            <Input type='text'  color='primary'/>

            <InputLabel>Promoções</InputLabel>
            <Checkbox color='primary'/>

            <InputLabel>Novidades</InputLabel>
            <Checkbox color='primary'/>

            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default SignInForm;