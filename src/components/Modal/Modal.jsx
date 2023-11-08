import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  render() {
    const { imageUrl, onClose } = this.props;

    return (
      <div className={css['Overlay']} onClick={onClose}>
        <div className={css['Modal']}>
          <img src={imageUrl} alt="Large" />
        </div>
      </div>
    );
  }
}

export default Modal;
