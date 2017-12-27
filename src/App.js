import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

class App extends Component {

    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="container">
                New Username : <User changeName={() => this.props.setName("Luna")}/>
                <p>Username : {this.props.user.name}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.reducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SETNAME",
                payload: name
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
