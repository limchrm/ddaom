import * as React from "react";
import * as ReactDOM from "react-dom";

import Clock from "./components/Clock.tsx"
import Quote from "./components/Quote.tsx"
import Setting from "./components/Setting.tsx"
import Footer from "./components/Footer.tsx";

const root = document.getElementById("ddaom");

class Ddaom extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Clock />
        <Quote />
        <Setting />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render( <Ddaom />, root );