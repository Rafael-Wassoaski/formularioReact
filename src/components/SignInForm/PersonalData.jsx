import React, {useState, useContext} from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";
import Validations from "../../contexts/Validations";
import useErrors from "../../hooks/useErrors";

function PersonalData({aoEnviar}) {
    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidade] = useState(true);
    const validar = useContext(Validations);
    const [erros, validarCampos, possoEnviar] = useErrors(validar);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome, sobreNome, cpf, novidades, promocoes});
            }
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
                name='cpf'
                helperText={erros.cpf.helpText}
                error={!erros.cpf.valido}
                onBlur={validarCampos}
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


            <Button type='submit' variant='contained' color='primary'>Próximo</Button>
        </form>
    )
}

export default PersonalData;