import './App.css';
import {Component, Fragment} from "react";
import SignInForm from './components/SignInForm/SignInForm';

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>Formulario de cadastro</h1>
                <SignInForm/>
            </Fragment>
        );
    }
}

export default App;
