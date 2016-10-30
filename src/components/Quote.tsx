import * as React from 'react';
import classNames from 'classnames';

class Quote extends React.Component<any, any> {
  public render() {
    return (
      <section id="quote">
        <div id="bg">
          <div className="dim"></div>
          <div className="wrap-quote">
            <span className="quote-mark">“</span>
            <pre className="quote-text">명언</pre>
            <p className="quote-from">출처1<u>출처2</u></p>
            <img className="quote-reload" />
          </div>
        </div>
      </section>
    );
  }
}

export default Quote;