import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const HelpInfoOutline = props => (
  <g>
    <path
      {...props}
      d="M25.39,25.45a1,1,0,0,0-1.38.29c-1.41,2.16-4,4.81-6.31,5.7s-4.12.57-4.84,0c-.31-.27-1.12-1-.43-3.49.46-1.66,3.32-9.48,4-11.38l-2.18.28c-.69,1.86-3.29,8.84-3.76,10.58-.68,2.49-.34,4.3,1.09,5.56A5.59,5.59,0,0,0,15,34a9.53,9.53,0,0,0,3.45-.7c2.79-1.09,5.72-4.12,7.26-6.47A1,1,0,0,0,25.39,25.45Z"
    />
    <path
      {...props}
      d="M19.3,11a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,19.3,11Zm0-7a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,19.3,4Z"
    />
    <path
      {...props}
      d="M11.81,15c.06,0,6.27-.82,7.73-1,.65-.1,1.14,0,1.3.15s.21.8-.07,1.68c-.61,1.86-3.69,11-4.59,13.71a8,8,0,0,0,1.29-.38,7.32,7.32,0,0,0,1.15-.6C19.85,25,22.15,18.1,22.67,16.52s.39-2.78-.3-3.6a3.16,3.16,0,0,0-3.08-.83c-1.43.15-7.47.94-7.73,1a1,1,0,0,0,.26,2Z"
    />
  </g>
);

const HelpInfoSolid = props => (
  <g>
    <circle {...props} cx="20.75" cy="6" r="4" />
    <path
      {...props}
      d="M24.84,26.23a1,1,0,0,0-1.4.29,16.6,16.6,0,0,1-3.51,3.77c-.33.25-1.56,1.2-2.08,1-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64,4.05-12,4.47-13.3.62-1.9.35-3.77-2.48-3.32-.77.08-8.58,1.09-8.72,1.1a1,1,0,0,0,.13,2s3-.39,3.33-.42a.88.88,0,0,1,.85.44,2.47,2.47,0,0,1-.07,1.71c-.26,1-4.37,12.58-4.5,13.25a2.78,2.78,0,0,0,1.18,3,5,5,0,0,0,3.08.83h0a8.53,8.53,0,0,0,3.09-.62c2.49-1,5.09-3.66,6.46-5.75A1,1,0,0,0,24.84,26.23Z"
    />
  </g>
);

const HelpInfo = props => (
  <Icon {...props}>
    {props.outline
      ? ownProps => <HelpInfoOutline {...ownProps} />
      : ownProps => <HelpInfoSolid {...ownProps} />}
  </Icon>
);

HelpInfo.displayName = 'HelpInfo';

HelpInfo.defaultProps = {
  outline: false,
};

HelpInfo.propTypes = {
  outline: PropTypes.bool,
};

export default HelpInfo;