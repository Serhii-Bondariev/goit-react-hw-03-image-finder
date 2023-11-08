import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image, openModal } = this.props;

    return (
      <li
        className={css['ImageGalleryItem']}
        onClick={() => openModal(image.largeImageURL)}
      >
        <img
          className={css['ImageGalleryItem-image']}
          src={image.webformatURL}
          alt={image.id}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
