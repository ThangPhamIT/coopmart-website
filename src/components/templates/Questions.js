import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Card } from 'semantic-ui-react';
import { BEFORE_TIME_UP, SUBMIT_TEST, QUESTION, TIME_UP } from '../utils/Constants';
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
        console.log('department will: ', this.props.department);
        switch(this.props.department) {
            case 'IT':
                return QUESTIONS = Collection.IT_QUESTIONS;
            case 'SALES':
                return QUESTIONS = Collection.SALE_QUESTIONS;
            default:
                return QUESTIONS = Collection.IT_QUESTIONS;
        }
    }

    render() {
        const { username } = this.props;
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