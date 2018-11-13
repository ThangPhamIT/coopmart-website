import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/authenticate';
import Header from '../header/Header';
import { Card, Image, Button } from 'semantic-ui-react';
import logo from '../../images/logocoopmartvn.png';
import './Page.css';
import { WELCOME_TO_MINI_TEST, SIGN_UP, LOGIN, LOGOUT, PLEASE_TRY_AGAIN } from '../utils/Constants';

const HomePage = ({ isAuthenticated, logout }) => (
    <div className="homepage">
        <Header/>
        { isAuthenticated ? (
            <center>
                <Card className="homepage-card-login">
                <Card.Content>
                    <Image size='mini' src={logo} className='homepage-img-content-coop'/>
                    <div className='homepage-welcome'>{ PLEASE_TRY_AGAIN }</div> 
                <Button primary onClick={() => logout()}>{ LOGOUT }</Button>
                </Card.Content>
            </Card>
            </center>
        ) : (
            <center>
                <Card className="homepage-card-login">
                <Card.Content>
                    <Image size='mini' src={logo} className='homepage-img-content-coop'/>
                </Card.Content>
                <div className='homepage-welcome'>{ WELCOME_TO_MINI_TEST }</div>
                <Link to="/signup" className='homepage-welcome-sign-up'>{SIGN_UP}</Link> 
                or
                <Link to="/login" className='homepage-welcome-login'>{LOGIN}</Link>
            </Card>
            </center>
        ) }
    </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);