import React from "react";
import {connect} from "react-redux";

import { User } from './User';
import { Main } from './Main';

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
      math: state.math
  };
};


//dispatching actions to the redux reducer.
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
};

//even though we use provider to connect entire App component to store,we still have to connect 
// individual react component that requires access to store.This is done by using coonect.
export default connect(mapStateToProps, mapDispatchToProps)(App);