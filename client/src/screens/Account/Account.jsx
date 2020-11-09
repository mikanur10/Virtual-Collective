import React from 'react';
import {Link} from 'react-router-dom'
import UniversalLayout from '../../components/shared/UniversalLayout/UniversalLayout';
import './Account.css'

function Account() {
    return (
        <div>
            <UniversalLayout>
            <div className="account-button">

            <Link to="/login"><button className="button-acc">Login</button></Link>
            <Link to='/signup'><button className="button-acc">Sign Up</button></Link>
            </div>
            </UniversalLayout>
            
        </div>
    );
}

export default Account;