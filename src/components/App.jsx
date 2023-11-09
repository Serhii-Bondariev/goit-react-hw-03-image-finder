import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import css from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      images: [],
      isLoading: false,
      page: 1,
      largeImageUrl: '',
      showModal: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Перевірка, чи змінився стан query або page
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=39585624-363ad1b9d988237f1da4f5c58&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ isLoading: false });
    }
  };

  handleSearch = newQuery => {
    this.setState({ query: newQuery, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = imageUrl => {
    this.setState({ largeImageUrl: imageUrl, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ largeImageUrl: '', showModal: false });
  };

  render() {
    const { images, isLoading, largeImageUrl, showModal } = this.state;

    return (
      <div className={css['App']}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} openModal={this.handleOpenModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal imageUrl={largeImageUrl} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
