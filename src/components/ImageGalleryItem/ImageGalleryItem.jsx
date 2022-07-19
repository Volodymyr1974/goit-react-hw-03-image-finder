

export function ImageGalleryItem({ ImageGallery }) {
    return ImageGallery.map(item => {
        return (
            <li
                key={item.id}>
                <img
                    src={item.webformatURL}
                    alt='sdsdsd'
                />
            </li>
        );
    });
}

