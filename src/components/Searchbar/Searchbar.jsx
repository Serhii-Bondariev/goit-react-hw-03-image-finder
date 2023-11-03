import { React } from 'react';
import Button from '../Button/Button';

const Searchbar = () => {
  return (
    <header class="searchbar">
      <form class="form">
        <Button />

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
