import React, {useState} from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function SignInForm() {
    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome);
            console.log(sobreNome);
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0, 3);
                    }
                    setNome(tmpNome);
                }}
                id='nome' label='Nome' type='text' variant='outlined' margin='normal' fullWidth/>

            <TextField
                value={sobreNome}
                onChange={(event) => {
                    setSobreNome(event.target.value);
                }}
                id='sobrenome' label='Sobrenome' type='text' variant='outlined' margin='normal' fullWidth/>

            <TextField
                value={cpf}
                onChange={(event) => {
                    let tmpCPF = event.target.value;
                    if (tmpCPF.length <= 11) {
                        setCpf(tmpCPF);
                    }

                }} id='cpf' label='CPF' type='text' variant='outlined' margin='normal' fullWidth/>

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