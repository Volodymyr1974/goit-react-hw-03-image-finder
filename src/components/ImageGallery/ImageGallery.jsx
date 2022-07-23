import Button from "components/Button/Button";
import { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import fetchGallery from '../service/ApiService';
import Modal from '../Modal/Modal';
import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import Loader from "../Loader/Loader";


class ImageGallery extends Component {
    state = {
        ImageGallery: [],
        showModal: false,
        largeImageURL: '',
        tags: '',
        status: 'idle',
        error: null,
        totalHits: null,
    }

    componentDidUpdate(prevProps, prevState) {
        const { searchQwery, pageNumber } = this.props
        if (
            prevProps.searchQwery !== searchQwery ||
            prevProps.pageNumber !== pageNumber
        ) {
            this.setState({ status: 'pending' });
            fetchGallery(searchQwery, pageNumber)
                .then(gallery => {
                    console.log(prevState)
                    if (!gallery.hits.length) {
                        this.setState({
                            status: 'idle',
                        });
                        Notiflix.Notify.warning(`Ух...Щось пішло не так, або дані за Вашим запитом відсутні`)
                        return;
                    }

                    if (prevProps.searchQwery !== searchQwery) {
                        this.setState({ ImageGallery: [...gallery.hits] });
                    }
                    // else {
                    //     this.setState({ ImageGallery: [...this.state.ImageGallery, ...gallery.hits] });
                    // }
                    this.setState({ status: 'resolved', totalHits: gallery.totalHits });
                    console.log(this.state.ImageGallery.length);
                    if (this.state.ImageGallery.length > this.state.totalHits) {
                        this.setState({ status: 'idle' })
                    }
                })
                .catch(error => this.setState({ error, status: 'rejected' }))
        };
    };
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    onSetImage = (largeImageURL, tags) => {
        this.setState({
            largeImageURL,
            tags
        });
        this.toggleModal();

    }
    render() {
        console.log('render', this.state);
        const { ImageGallery, showModal, largeImageURL, tags, status, error, totalHits } = this.state;
        console.log(ImageGallery.length);
        return (
            <>
                {ImageGallery.length > 0 && (
                    <ul className={style.ImageGallery}>
                        <ImageGalleryItem
                            ImageGallery={ImageGallery}
                            onSetImage={this.onSetImage}
                        />
                    </ul>)}
                {status === 'pending' && < Loader />}
                {status === 'resolved' && ImageGallery.length < totalHits && <Button onLoadMoreButtonClick={this.props.onLoadMoreBtn}></Button>}
                {showModal && (
                    <Modal
                        onCloseModal={this.toggleModal}
                        largeImageURL={largeImageURL}
                        tags={tags}>
                    </Modal>)}
                {status === 'rejected' && Notiflix.Notify.warning(error.message)}
            </>

        )

    }
};

ImageGallery.propTypes = {
    onLoadMoreBtn: PropTypes.func.isRequired,
    searchQwery: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired
};

export default ImageGallery;