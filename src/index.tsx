import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {store} from "./bll/store";
import {BrowserRouter} from "react-router-dom";

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
// );


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

