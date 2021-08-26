import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";

function DeliveryForm({aoEnviar}) {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState();
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({cep, endereco, numero, cidade, estado});
        }}>
            <TextField value={cep} id='cep' label='CEP' type='number' variant='outlined' margin='normal' required
                       onChange={(event) => {
                           setCep(event.target.value);
                       }}/>
            <TextField value={endereco} id='endereco' label='Endereço' type='text' variant='outlined' margin='normal'
                       fullWidth
                       required onChange={(event) => {
                setEndereco(event.target.value);
            }}/>
            <TextField value={numero} id='numero' label='Número' type='number' variant='outlined' margin='normal'
                       required
                       onChange={(event) => {
                           setNumero(event.target.value);
                       }}/>
            <TextField value={estado} id='estado' label='Estado' type='text' variant='outlined' margin='normal' required
                       onChange={(event) => {
                           setEstado(event.target.value);
                       }}/>
            <TextField value={cidade} id='cidade' label='Cidade' type='text' variant='outlined' margin='normal' required
                       onChange={(event) => {
                           setCidade(event.target.value);
                       }}/>
            <Button type='submit' variant='contained' color='primary' fullWidth>Finalizar cadastro</Button>

        </form>
    )
}

export default DeliveryForm;