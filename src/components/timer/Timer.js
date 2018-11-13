import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

//let counter = 0;
let timeLeft = 180;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            counter: 0
        }
    }

     nf = (n) => {
        return n > 9 ? "" + n : "0" + n;
    };

     convertSecond = (second) => {
        let min = Math.floor(second/60);
        let sec = second % 60;
        return this.nf(min) + ':' + this.nf(sec);
    };

    componentWillMount() {
        let { counter } = this.state;
        let interval = setInterval(() => {
            this.setState({counter: counter++});
            var currentTime = this.convertSecond(timeLeft - counter); 
            this.setState({time : currentTime});
            if ((timeLeft - counter) === 120) {
                this.notifyEndingTime(false);
            }

            if ((timeLeft - counter) === 10) {
                this.notifyEndingTime(true);
            }

            if (counter === timeLeft) {
                this.endingTime();
                clearInterval(interval);
                counter = 0;
            }
        }, 1000);
    }

    notifyEndingTime = (isTimeUp) => {
        this.props.notifyEndingTime(isTimeUp);
    };

    endingTime = () => {
        this.props.endingTime();
    }

    render() {
        const { time } = this.state;
        return(
            <span className='time'>{time}</span>
        );
    }
}

Timer.propTypes = {
    endingTime: PropTypes.func.isRequired
};

export default Timer;