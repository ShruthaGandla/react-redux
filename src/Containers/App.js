
//this is a smart component i.e. it is connected to the redux and aware of the state.Smart components are called containers
import React from "react";
import {connect} from "react-redux";

import { User } from "../Components/User";
import { Main } from "../Components/Main";

import {setName} from "../Actions/userActions"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Worlddd")}/>
                    
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

//very imp.Here I am mapping the global state to the local variables(local this.props)
const mapStateToProps = (state) => {
  return {
      user: state.user,
      number: state.number
  };
};


//dispatching actions to the redux reducer.
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

//even though we use provider to connect entire App component to store,we still have to connect 
// individual react component that requires access to store.This is done by using coonect.
export default connect(mapStateToProps, mapDispatchToProps)(App);