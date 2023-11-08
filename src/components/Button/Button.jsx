import React, { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <button
        type="button"
        className={css['Button']}
        onClick={onClick}
        disabled={disabled}
      >
        Load more
      </button>
    );
  }
}

export default Button;
