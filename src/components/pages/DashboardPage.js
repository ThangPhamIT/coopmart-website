import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Questions from '../templates/Questions';
import { sendResult } from '../../actions/users';
import { Button, Card, Image } from 'semantic-ui-react';
import { logout } from '../../actions/authenticate';
import Header from '../header/Header';
import { CONGRATULATIONS, DONE_TEST_EXAM, LOGOUT } from '../utils/Constants';
import logo from '../../images/logocoopmartvn.png';


class DashboardPage extends React.Component {
    
    submit = data => this.props.sendResult(data);

    logout = () => this.props.logout();

    render() {
        const { submitTest } = this.props;
        return (
            <div>
                <Header />
                { submitTest ? 
                 <center>
                    <Card className="homepage-card-login">
                        <Card.Content>
                            <Image size='mini' src={logo} className='homepage-img-content-coop'/>
                            <div className='dashboard-congratulations'>{ CONGRATULATIONS }</div>
                            <div className='dashboard-done-test-exam'>{ DONE_TEST_EXAM }</div>
                            <Button primary onClick={() => this.logout() }>{ LOGOUT }</Button>
                        </Card.Content>
                    </Card>
                </center> : (<Questions submit={this.submit}/>)}
            </div>
        );
    }
}

DashboardPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    sendResult: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        submitTest: state.user.submitTest
    }
}

export default connect(mapStateToProps, { sendResult, logout })(DashboardPage);