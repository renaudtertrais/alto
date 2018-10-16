import React from 'react';
import PropTypes from 'prop-types';

import Popover from '../Popover';
import ChevronDown from '../Icons/ChevronDown';
import Button from '../Button';
import { bemClass } from '../helpers/bem';

import DropdownItem from './components/DropdownItem';
import './Dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      previousPropOpen: props.open,
      open: props.open,
    };

    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.previousPropOpen !== props.open) {
      return {
        previousPropOpen: props.open,
        open: props.open,
      };
    }
    return null;
  }

  isSelected(key) {
    const { selected } = this.props;
    return Array.isArray(selected) ? selected.includes(key) : key === selected;
  }

  close() {
    this.toggle(false);
  }

  handleClose() {
    const { onClose } = this.props;
    if (onClose) {
      onClose(this.close);
    } else {
      this.close();
    }
  }

  handleOpen() {
    const { onOpen } = this.props;
    if (onOpen) {
      onOpen();
    }
    this.toggle();
  }

  toggle(open) {
    this.setState({ open: typeof open === 'boolean' ? open : !this.state.open });
  }

  renderTrigger() {
    const { renderTrigger, defaultLabel, label, items } = this.props;
    if (typeof renderTrigger === 'function') {
      return renderTrigger(this.toggle, this.state.open);
    }

    const text =
      label ||
      ((items || []).find(({ key }) => this.isSelected(key)) || {}).title ||
      defaultLabel ||
      'undefined label';

    return (
      <Button flat onClick={this.handleOpen} active={this.state.open}>
        {text} <ChevronDown right />
      </Button>
    );
  }

  renderItem(popoverProps) {
    const { id } = this.props;
    return (item, selected) => (
      <DropdownItem
        id={`${id}__item--${item.key}`}
        item={item}
        selected={selected}
        dropdownProps={this.props}
        popoverProps={popoverProps}
        onClose={this.handleClose}
      />
    );
  }

  renderList(popoverProps) {
    const { items } = this.props;
    const hasItems = Array.isArray(items) && !!items.length;
    if (!hasItems) return null;

    const renderItem = this.renderItem(popoverProps);
    return (
      <ul className="Dropdown__list">
        {items.map(item => (
          <li key={item.key} className="Dropdown__item">
            {renderItem(item, this.isSelected(item.key))}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const {
      className,
      items,
      onOpen,
      onClose,
      renderTrigger,
      children,
      selected,
      onClick,
      getItems,
      defaultLabel,
      onSaveEdit,
      invalidateEdit,
      ...popoverProps
    } = this.props;

    const renderContent = typeof children === 'function' ? children : list => children || list;

    return (
      <Popover
        start={!renderTrigger}
        {...popoverProps}
        className={bemClass('Dropdown', {}, className)}
        baseClassName="Dropdown"
        open={this.state.open}
        target={this.renderTrigger()}
        onClose={this.handleClose}
      >
        {renderContent(this.renderList(popoverProps))}
      </Popover>
    );
  }
}

Dropdown.displayName = 'Dropdown';

Dropdown.defaultProps = {
  open: false,
  getItems: () => null,
};

const keyPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired;

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
  renderTrigger: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: keyPropType,
    }).isRequired
  ),
  onSelect: PropTypes.func,
  label: PropTypes.any,
  defaultLabel: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.arrayOf(keyPropType), keyPropType]),
  getItems: PropTypes.func,
  onSaveEdit: PropTypes.func,
  invalidateEdit: PropTypes.func,
};

export default Dropdown;
