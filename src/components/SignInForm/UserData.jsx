import React, {useContext, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import Validations from "../../contexts/Validations";
import useErrors from "../../hooks/useErrors";

function UserData({aoEnviar}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validar = useContext(Validations);
    const [erros, validarCampos, possoEnviar] = useErrors(validar);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField value={email} id='email' label='email' type='email' variant='outlined' margin='normal' fullWidth
                       required
                       onChange={(event) => {
                           setEmail(event.target.value);
                       }}/>
            <TextField value={senha} id='senha' name='senha' label='senha' type='password' variant='outlined'
                       margin='normal' fullWidth required
                       onChange={(event) => {
                           setSenha(event.target.value);
                       }}
                       helperText={erros.senha.helpText}
                       error={!erros.senha.valido}
                       onBlur={validarCampos}
            />
            <Button type='submit' variant='contained' color='primary'>Próximo</Button>
        </form>
    )
}

export default UserData;