import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null: // Inital state, We still have no user object defined
                return;
            case false:   //user is not loggedIn
                 return (
                    <li><a href="/auth/google">Login with Google</a></li>
                 );
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }



    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">Emaily</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}


/**
 * Map to Props the data we have defined in our Redux Store
 * @param state
 * @returns {{auth: *}}
 */
function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);