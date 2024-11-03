import {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";

// import ReactDOM from 'react-dom';
// import { FirebaseAppProvider } from 'reactfire';
// import firebaseConfig from './firebaseConfig';

export default class App extends Component {
    render() {
        return (
            // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
            // </FirebaseAppProvider>
        );
    }
}