import { Component } from "react";
// import axios from 'axios';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
    state = {
        ImageGallery: [],
    }

    componentDidUpdate(prevProps, prevState) {
        const { searchQwery, pageNumber } = this.props
        if (
            prevProps.searchQwery !== searchQwery ||
            prevProps.pageNumber !== pageNumber
        ) {
            console.log(searchQwery, pageNumber)
            fetch(`https://pixabay.com/api/?key=27772870-4058b108341efce898c1dbbbe&q=${searchQwery}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=12`)
                .then(response => response.json())
                .then(gallery => {

                    if (
                        prevProps.searchQwery !== searchQwery
                    ) {
                        this.setState({ ImageGallery: [...gallery.hits] });

                    } else {
                        console.log(this.state);
                        this.setState({ ImageGallery: [...this.state.ImageGallery, ...gallery.hits] })
                    }

                }
                );

        }


    }
    render() {

        return (

            <ul >
                <ImageGalleryItem
                    ImageGallery={this.state.ImageGallery}

                />
            </ul>
        )

    }
};
export default ImageGallery;