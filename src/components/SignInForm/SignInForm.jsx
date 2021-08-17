import React from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function SignInForm() {


    return (
        <form>
            <TextField id='nome' label='Nome' type='text' variant='outlined' margin='normal' fullWidth/>
            <TextField id='sobrenome' label='Sobrenome' type='text' variant='outlined' margin='normal' fullWidth/>
            <TextField id='cpf' label='CPF' type='text' variant='outlined' margin='normal' fullWidth/>

            <FormControlLabel control={
                <Switch name='Promoções' defaultChecked={true} color='primary'/>
            } label='Promoções'/>

            <FormControlLabel control={
                <Switch name='Novidades' color='primary'/>
            } label='Novidades'/>


            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default SignInForm;