import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                Change Name : 
                <button onClick={this.props.changeName}>Go</button>
            </div>
        );
    }
}

export default User;