import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message, Card, Dropdown } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import { 
    PLEASE_ENTER_YOUR_FULL_NAME, 
    LOGIN, 
    FULL_NAME_PLACE_HOLDER, 
    INVALID_CREDENTIALS,
    PLEASE_SELECT_YOUR_DEPARTMENT,
    USER_NAME_CAN_NOT_BE_EMPTY,
    DEPARTMENT_CAN_NOT_BE_EMPTY } from "../utils/Constants";

import { DEPARTMENTS } from "../utils/Department";    

class LoginForm extends React.Component {
    state = {
        data: {
            username: '',
            department: '',
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSelectDepartment = (_, { value } ) => this.setState((state) => ({
        data: { ...state.data, department: value }
    }));

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            console.log('login', this.state.data)
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    };

    validate = data => {
        const errors = {};
        if (!data.username) errors.username = USER_NAME_CAN_NOT_BE_EMPTY;
        if (!data.department) errors.department = DEPARTMENT_CAN_NOT_BE_EMPTY;
        return errors;
    };

    render() {
        const { data, errors, loading } = this.state;

        return (
            <center>
                <Card className="homepage-card-login">
                <Card.Content>
                    <Form onSubmit={this.onSubmit} loading={loading}>
                        {errors.global && (
                            <Message negative>
                                <Message.Header>{INVALID_CREDENTIALS}</Message.Header>
                                <p>{errors.global}</p>
                            </Message>
                        )}
                        <Form.Field error={!!errors.username}>
                            <label htmlFor="username" className='login-title-name'>{PLEASE_ENTER_YOUR_FULL_NAME}</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder={FULL_NAME_PLACE_HOLDER}
                                value={data.username}
                                onChange={this.onChange}
                            />
                            {errors.username && <InlineError text={errors.username} />}
                        </Form.Field>

                        <Form.Field error={errors && !!errors.department}>
                            <Dropdown 
                                placeholder={ PLEASE_SELECT_YOUR_DEPARTMENT }
                                fluid 
                                selection
                                name="department"
                                options={ DEPARTMENTS } 
                                onChange={ this.onSelectDepartment }
                            />
                            {errors && errors.department && <InlineError text={errors.department} />}
                        </Form.Field>

                        <Button primary className='login-button'>{LOGIN}</Button>
                    </Form>
                </Card.Content>
             </Card>
            </center>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;
