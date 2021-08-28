import './App.css';
import {Component} from "react";
import SignInForm from './components/SignInForm/SignInForm';
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto'
import {validarCPF, validarSenha} from './models/Cadastro';
import Validations from "./contexts/Validations";

class App extends Component {
    render() {
        return (
            <Container component='article' maxWidth='sm'>
                <Typography variant='h3' align='center' component='h1'>
                    Formulário de cadastro
                </Typography>
                <Validations.Provider value={{cpf: validarCPF, senha: validarSenha}}>
                    <SignInForm aoEnviar={aoEnviarFormulario}/>
                </Validations.Provider>
            </Container>
        );
    }
}

function aoEnviarFormulario(dados) {
    console.log(dados);
}


export default App;
