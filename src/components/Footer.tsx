import * as React from 'react';
import * as classNames from 'classnames';

interface FooterButtonProps {
  label: string;
  className: string;
  iconUrl: string;
  onClick?: () => any;
}
  
const FooterButton: React.StatelessComponent<FooterButtonProps> = ({ 
  label, 
  className, 
  iconUrl, 
  onClick,
}) => (
  <a className={`footerButton ${className}`} onClick={onClick} >
    <img className="footerButtonIcon" src={iconUrl} alt={label} />
    <span className="footerButtonLabel">{label}</span>
  </a>  
);

interface FooterProps {
  onReloadButtonClick: () => any;
}

class Footer extends React.Component<FooterProps, any> {
  public render() {
    return (
      <footer>
        <div className="footerButtonWrapper">
          <FooterButton
             label="새로고침" className="refresh" iconUrl={require('../images/ic_refresh.svg')}
             onClick={this.props.onReloadButtonClick} 
          />
          <FooterButton 
            label="명언 제보" className="suggest" iconUrl={require('../images/ic_suggest.svg')}
          />
        </div>
        <p className="footerCopyright">© 2016 CHRM</p>
      </footer>
    );
  }
}

export default Footer;
