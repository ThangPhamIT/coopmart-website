import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Card } from 'semantic-ui-react';
import { BEFORE_TIME_UP, SUBMIT_TEST, QUESTION, TIME_UP, SALE, SECURITY, QUESTION_FOR_DEPARTMENT, DEPARTMENT_TITLE } from '../utils/Constants';
import Collection from '../utils/Collection';
import './Questions.css';
import Timer from '../timer/Timer';

let QUESTIONS = [];
class Questions extends React.Component {
    state = {
        data: {
            answer_1: '',
            answer_2: '',
            answer_3: '',
            answer_4: '',
            answer_5: '',
            answer_6: '',
            answer_7: '',
            answer_8: '',
            answer_9: '',
            answer_10: '',
            answer_11: '',
            answer_12: '',
            answer_13: '',
            answer_14: '',
            answer_15: '',
            answer_16: '',
            answer_17: '',
            answer_18: '',
            answer_19: '',
            answer_20: '',
            answer_21: '',
            answer_22: '',
            answer_23: '',
            answer_24: '',
            answer_25: '',
        },
        loading: false,
        errors: {},
        department: this.props,
    }

    onChange = e => this.setState({
        ...this.state,
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onClick = () => {
        this.setState({ loading: true });
        let question_answer = [];
        QUESTIONS.map((ques, index) => {
            let item = {question: ques.question, answer: this.state.data['answer_' + (index + 1)]}
            question_answer.push(item);
            return question_answer;
        });
        const information = {
            username: this.props.username,
            department: this.props.department,
            testing: question_answer
        }
        console.log('information test: ', information);
        this.props
            .submit(information);
    };

    notifyEndingTime = (isTimeUp) => {
        var endingTimeMessage = document.getElementById('endingTimeMessage');
        if (endingTimeMessage !== null && endingTimeMessage !== undefined) {
            if (isTimeUp) {
                endingTimeMessage.innerHTML = TIME_UP;
            }
            endingTimeMessage.className = "show";
            setTimeout(() => {
                endingTimeMessage.className = endingTimeMessage.className.replace("show", "")
            }, 5000);
        }
    };

    componentWillMount() {
        switch(this.props.department) {
            case SECURITY:
                return QUESTIONS = Collection.SECURITY_QUESTIONS;
            case SALE:
                return QUESTIONS = Collection.SALE_QUESTIONS;
            default:
                return QUESTIONS = Collection.SECURITY_QUESTIONS;
        }
    }

    render() {
        const { username, department } = this.props;
        const { loading } = this.state;
        
        let question = QUESTIONS.map((item, index) => {
            let answer = item.answers.map((ans, position) => {
                return (<Card.Description key={position + 1}>
                    <input type="radio" value={ans} name={`answer_` + (index + 1)} onChange={this.onChange}/>
                    <label htmlFor={position + 1}> {ans}</label>
                </Card.Description>)
            });
            return (
                <Card key={index} id={index}>
                     <Card.Content className='question'>{ QUESTION } {index + 1}:&nbsp; &nbsp; {item.question} </Card.Content>
                    <div className='answer-question'>
                       {answer}
                    </div>
                </Card>
            )
        })

        return (
            <div className='question-content'>
                <div className='hello-user-test'> 
                    <span className='hello-user'><i className="fa fa-user-circle" aria-hidden="true"></i> {username} &nbsp; &nbsp; &nbsp;</span>
                    <span><Timer endingTime={this.onClick} notifyEndingTime={this.notifyEndingTime}/></span>
                </div>
                <div id="endingTimeMessage">{ BEFORE_TIME_UP }</div>
                <center className='question-for-department'>{ QUESTION_FOR_DEPARTMENT } {department}</center>
                <center className='department-title'>{ DEPARTMENT_TITLE } {department}</center>
                <Card>
                    <Card.Content>
                        <Form loading={loading}>
                            {question}
                            <center>
                            <Button primary onClick={this.onClick}>{ SUBMIT_TEST }</Button>
                            </center>
                        </Form>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.user.username,
        department: state.user.department
    }
}

Questions.propTypes = {
    notifyEndingTime: PropTypes.func
}

export default connect(mapStateToProps, { })(Questions);