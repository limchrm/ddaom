import * as React from 'react';

class Footer extends React.Component<any, any> {

  public render() {
    return (
      <footer>
        <a>피드백</a>
        <a>명언 제보</a>
        <p>© 2015 CHRM</p>
        <a>limchrm</a>
      </footer>
    );
  }
}

export default Footer;

// <footer>
// 		<a class="btn btn_feedback track" ng-click="feedback='open'"><img src="img/ic_feedback.svg"><span>피드백</span></a>
// 		<a class="btn btn_suggest" href="{{your.feeadback.url}}" target="_blank"><img src="img/ic_suggest.svg"><span>명언 제보</span></a>
// 		<a class="btn btn_setting" ng-click="open=true"><img src="img/ic_setting.svg"></a>
// 		<p>© 2015 CHRM<a class="profile" href="http://fb.me/limchrm" target="_blank">limchrm</a></p>
// 	</footer>