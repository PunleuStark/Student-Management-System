import React,{Component} from 'react';
import {Link} from "react-router-dom";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class NavBar extends Component{
    constructor(){
        super();
        this.state={
            signIn: true
        }
    }
    render(){
        const {signIn} = this.state;
        const show = signIn ? (<SignedInLinks/>) : (<SignedOutLinks/>);
        return (
        <nav className="nav-wrapper teal darken-4">
        <div className="container">
        <span className="brand-logo hide-on-small-only">Student Management System</span>
        <span className="btn btn-floating teal darken-2 hide-on-med-and-up">SMS</span>
        <ul className="right">
        <li><Link to="/students">Students</Link></li>
        {show}
        </ul>
        </div>
        </nav>
            )
    }
}
export default NavBar;