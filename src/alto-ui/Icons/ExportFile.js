import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const ExportFileOutline = props => (
  <g>
    <path
      {...props}
      d="M6,13.61h7.61V6H24v8.38h2V6a2,2,0,0,0-2-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z"
    />
    <path
      {...props}
      d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z"
    />
  </g>
);

const ExportFileSolid = props => (
  <g>
    <path
      {...props}
      d="M17,22a1,1,0,0,1,1-1h8V6a2,2,0,0,0-2-2H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z"
    />
    <path
      {...props}
      d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z"
    />
  </g>
);

const ExportFile = props => (
  <Icon {...props}>
    {props.outline
      ? ownProps => <ExportFileOutline {...ownProps} />
      : ownProps => <ExportFileSolid {...ownProps} />}
  </Icon>
);

ExportFile.displayName = 'ExportFile';

ExportFile.defaultProps = {
  outline: false,
};

ExportFile.propTypes = {
  outline: PropTypes.bool,
};

export default ExportFile;
