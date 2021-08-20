import './App.css';
import {Component} from "react";
import SignInForm from './components/SignInForm/SignInForm';
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto'

class App extends Component {
    render() {
        return (
            <Container component='article' maxWidth='sm'>
                <Typography variant='h3' align='center' component='h1'>
                    Formulario de cadastro
                </Typography>
                <SignInForm aoEnviar={aoEnviarFormulario}/>
            </Container>
        );
    }
}

function aoEnviarFormulario(dados){
    console.log(dados);
}

export default App;
