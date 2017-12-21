import React from 'react';
import PropTypes from 'prop-types';

import { bemProps } from '../../helpers/bem';
import FormElement from '../FormElement';

import './TextField.scss';

const texfieldProps = bemProps('textfield', ['large', 'small', 'success', 'error', 'area']);

const TextField = props => (
  <FormElement {...props}>
    {props.area ? (
      <textarea {...texfieldProps(props, 'helpText', 'type')} type={null} />
    ) : (
      <input {...texfieldProps(props, 'helpText')} />
    )}
  </FormElement>
);

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  type: PropTypes.string,
  area: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
};

TextField.displayName = 'TextField';

export default TextField;