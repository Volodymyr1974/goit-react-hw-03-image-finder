import style from './ImageGalleryItem.module.css';


export default function ImageGalleryItem({ ImageGallery, onSetImage }) {
    return ImageGallery.map(item => {
        return (
            <li
                key={item.id}

                className={style.ImageGalleryItem}
            >
                <img className={style.ImageGalleryItem_image}
                    src={item.webformatURL}
                    alt={item.tags}
                    onClick={() => onSetImage(item.largeImageURL, item.tags)}
                />
            </li>
        );
    });
};



