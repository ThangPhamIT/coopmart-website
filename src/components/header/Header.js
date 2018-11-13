import React from 'react';
import { Card } from 'semantic-ui-react';

import logo from '../../images/logo.png';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Card className="navbar nav-background">
                <div className="navbar-brand justify-content">
                    <div className="navbar-item">
                        <img src={logo} alt="Co.opmart" width="80" height="75"/>
                        <div className='header-title'>
                            <label className='header-co-op'>co.op</label><label className='header-mart'>mart</label>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default Header;