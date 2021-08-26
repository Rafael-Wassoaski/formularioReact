import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";

function UserData({aoEnviar}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField value = {email} id='email' label='email' type='email' variant='outlined' margin='normal' fullWidth required
                       onChange={(event) => {
                           setEmail(event.target.value);
                       }}/>
            <TextField value = {senha} id='senha' label='senha' type='password' variant='outlined' margin='normal' fullWidth required
                       onChange={(event) => {
                           setSenha(event.target.value);
                       }}/>
            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default UserData;