import React, {useState} from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function SignInForm({aoEnviar}) {
    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidade] = useState(true);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobreNome, cpf, novidades, promocoes});
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    let tmpNome = event.target.value;
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
                <Switch name='Promoções'
                        checked={promocoes}

                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        color='primary'/>
            } label='Promoções'/>

            <FormControlLabel control={
                <Switch name='Novidades'
                        checked={novidades}
                        onChange={(event) => {
                            setNovidade(event.target.checked);
                        }}
                        color='primary'/>
            } label='Novidades'/>


            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default SignInForm;