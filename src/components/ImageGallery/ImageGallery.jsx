import Button from "components/Button/Button";
import { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import fetchGallery from '../service/ApiService';
// import * as basicLightbox from 'basiclightbox';
import Modal from '../Modal/Modal';
import style from './ImageGallery.module.css';



class ImageGallery extends Component {
    state = {
        ImageGallery: [],
        showModal: false,

    }

    componentDidUpdate(prevProps, prevState) {
        const { searchQwery, pageNumber } = this.props
        if (
            prevProps.searchQwery !== searchQwery ||
            prevProps.pageNumber !== pageNumber
        ) {
            console.log(searchQwery, pageNumber);
            fetchGallery(searchQwery, pageNumber)
                .then(gallery => {
                    if (prevProps.searchQwery !== searchQwery) {
                        this.setState({ ImageGallery: [...gallery.hits] });
                    } else {

                        this.setState({ ImageGallery: [...this.state.ImageGallery, ...gallery.hits] });
                        console.log(this.state);
                    }
                }
                );
        };
    };
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };
    render() {
        console.log(this.state);
        const { ImageGallery, showModal } = this.state;
        return (
            <>
                <ul className={style.ImageGallery}>
                    <ImageGalleryItem
                        ImageGallery={ImageGallery}
                    />
                </ul>
                <Button onLoadMoreButtonClick={this.props.onLoadMoreBtn}></Button>
                {showModal && (
                    <Modal >
                    </Modal>
                )}
            </>

        )

    }
};
export default ImageGallery;