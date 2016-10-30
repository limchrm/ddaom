/// <reference path="../interfaces.d.ts" />

import * as React from 'react';

const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
const now = new Date();
const getNow = () => {
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weekday = now.getDay();
  
  return {
    hours,
    minutes,
    month,
    date,
    weekday
  };
}

class Clock extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = getNow();
  }

  public render() {
    return (
      <header>
        <p>{this.state.hours}:{this.state.minutes}</p>
        <p>{this.state.month}. {this.state.date}. {weekdays[this.state.weekday]}</p>
      </header>
    );
  }
}

export default Clock;