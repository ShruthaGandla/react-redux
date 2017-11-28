import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

//we import App
import App from "./Containers/App";

//import store
import store from "./store"

//store has subsribed so that it can get the new state
// store.subscribe(() => {
//     console.log("Store updated!",store.getState())
// })


//we render here
render(

    //I want to connect the reactjs to redux store so that state is passed fro store to react app
    //provider is used for that connection
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main'));