import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          this.setState({
            registerStepTwoSwitch: false,
            registerBoxMinHeight: false,
          });
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  render() {
    return <div></div>;
  }
}
