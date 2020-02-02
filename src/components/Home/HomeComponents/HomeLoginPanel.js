import React from "react";
import { Link } from 'react-router-dom';

function LoginPanel() {
        return (
            <div className="loginPanel">
            <ul>
                <li><Link className="link" to='/userPanel'>Zaloguj</Link></li>
                <li><Link className="link" to='/newUserPanel'>Załóż konto</Link></li>
            </ul>
            </div>
        )
};

export default LoginPanel;