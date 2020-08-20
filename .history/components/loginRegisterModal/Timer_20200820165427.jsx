import React, { Component } from 'react';
import classes from './registerSide.module.css';

export default class Timer extends Component {
  state = {
    minutes: 2,
    seconds: 0,
  };

  componentDidMount() {
    clearInterval(this.myTimer);
    this.setState({
      minutes: 2,
      seconds: 0,
    });

    this.myTimer = setInterval(() => {
      let { minutes, seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myTimer);
          this.props.backToStep1();
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentDidUnmount() {
    clearInterval(this.myTimer);
    this.setState({
      minutes: 2,
      seconds: 0,
    });
  }

  render() {
    return (
      <div className={classes.timerBox}>
        <span>
          {this.state.minutes}:
          {this.state.seconds < 10
            ? `0${this.state.seconds}`
            : this.state.seconds}
        </span>
      </div>
    );
  }
}
