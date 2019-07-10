import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { bemClass } from '../helpers/bem';
import UserIcon from '../Icons/User';
import ImageIcon from '../Icons/Image';
import Image from '../Image';
import Tooltip from '../Tooltip';

import './Avatar.scss';

function Avatar({ className, src, alt, tooltip, large, small, big, onClick, hoverIcon }) {
  const ref = useRef();
  const clickable = !!onClick;
  const IconComponent = hoverIcon;

  return (
    <div ref={ref} className={bemClass('Avatar', { big, large, small, clickable }, className)}>
      {clickable && (
        <button className="Avatar__clickable-content-button" onClick={onClick}>
          {!small && (
            <IconComponent className={bemClass('Avatar__hover-image', { big, large })} baseline />
          )}
        </button>
      )}
      <Image className="Avatar__image" src={src} alt={alt || tooltip}>
        <div className="Avatar__placeholder">
          <div className="Avatar__placeholder-icon-container">
            <UserIcon className="Avatar__placeholder-icon" />
          </div>
        </div>
      </Image>
      {!!tooltip && <Tooltip content={tooltip} targetRef={ref} />}
    </div>
  );
}

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  hoverIcon: ImageIcon,
};

Avatar.propTypes = {
  className: PropTypes.string,
  tooltip: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  big: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  hoverIcon: PropTypes.func,
};

export default Avatar;
