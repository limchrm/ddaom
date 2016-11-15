import * as React from 'react';
import * as className from 'classnames';

class Config extends React.Component<any, any> {
  public render() {
    return (
      <section id="config">

        <h3 className="configLabel">테마</h3>
        <select id="setting-theme">
          <option value="white">화이트</option>
          <option value="black">블랙</option>
          <option value="transparent">투명</option>
          <option value="custom">커스텀</option>
        </select>

        {/*<div className="setting-custom-colorset">
          <h3>말</h3>
          <button className="setting-color-text" type="button"></button>
          <h3>박스</h3>
          <button className="setting-color-box" type="button"></button>
          <h3>테두리</h3>
          <button className="setting-color-border" type="button"></button>
        </div>*/}

        
        <h3 className="configLabel">말 크기</h3>
        <input type="number" value="40"/>

        <h3 className="configLabel">정렬</h3>
        <img className="setting-align-left" src="#" alt="left"/>
        <img className="setting-align-center" src="#" alt="center"/>
        
        <label htmlFor="setting-show-time">시간</label>
        <input id="setting-show-time" type="checkbox"/>

        <label htmlFor="setting-show-date">날짜</label>
        <input id="setting-show-date" type="checkbox"/>

        <button id="setting-submit" type="submit"></button>
      </section> 
    );
  }
}

export default Config;