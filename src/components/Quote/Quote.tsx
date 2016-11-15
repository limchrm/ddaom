import * as React from 'react';
import * as classNames from 'classnames';

interface QuoteProps {
  text: string;
  from1: string;
  from2: string;
}

const Quote: React.StatelessComponent<QuoteProps> = ({ text, from1, from2 }) => (
  <section id="quote">
    <div className="dim"></div>
    <div className="quoteCard">
      <span className="quoteMark">“</span>
      <pre className="quoteText">{text}</pre>
      <div className="quoteFrom">
        <span className="quoteFrom1">{from1}</span>
        <span className="quoteFrom2">{from2}</span>
      </div>
    </div>
  </section>
);

export default Quote;
