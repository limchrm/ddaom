import * as React from "react";
import * as ReactDOM from "react-dom";
import * as axios from 'axios';
import './styles/style.scss';

import Clock from "./components/Clock";
import Quote from "./components/Quote";
import Setting from "./components/Setting";
import Footer from "./components/Footer";

const root = document.getElementById("ddaom");

const QUOTE_DATA_URL = 'https://spreadsheets.google.com/feeds/list/1e3oNuL79PBq-xSvpovbppM5j4aUzgzHfkl5c6x1HzAc/od6/public/values?alt=json';
interface QuoteData {
  feed: any;
}

// SHUFFLE QUOTES AGAIN
function pickRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};

interface DdaomState {
  picked?: any;
}

class Ddaom extends React.Component<any, DdaomState> {
  entry: any;

  constructor(props: any) {
    super(props);

    this.state = {
      picked: null,
    };

    axios.get<QuoteData>(QUOTE_DATA_URL)
      .then(({ data }) => this.handleDataLoadSuccess(data))
      .catch(err => this.handleDataLoadFailure(err));
  }

  handleDataLoadSuccess = (data: QuoteData) => {
    this.entry = data.feed.entry;
    this.handleReload();
  }

  handleDataLoadFailure = (error: any) => {
    // Do something
  } 

  handleReload = () => {
    // TODO: Error handling
    if (!this.entry) return;

    const picked = pickRandomItem(this.entry);
    this.setState({ picked });
  }

  public render() {
    return (
      <div>
        <Clock />
        {this.state.picked && (
          <Quote
            text={this.state.picked.gsx$said.$t} 
            from1={this.state.picked.gsx$from.$t}
            from2={this.state.picked.gsx$as.$t}
          />
        )}
        {/* <Setting /> */}
        <Footer 
          onReloadButtonClick={this.handleReload} 
        />
      </div>
    );
  }
}

ReactDOM.render( <Ddaom />, root );
