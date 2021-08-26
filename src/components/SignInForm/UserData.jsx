import React, {useContext, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import Validations from "../../contexts/Validations";

function UserData({aoEnviar}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState({
        senha: {valido: true, helpText: ''}
    });

    const validar = useContext(Validations);

    function validarCampos(event) {
        const {name, value} = event.target;
        const isValid = validar[name](value);
        const novoEstado = {...erros};
        novoEstado[name] = isValid
        setErros(novoEstado);
    }

    function isValid(){
        for(let error in erros){
            if(!erros[error].valido){
                return false;
            }
        }
        return true;
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(isValid()){
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