import style from './Button.module.css';

const Button = ({ onLoadMoreButtonClick }) => {
    return (
        <button
            className={style.Button}
            onClick={onLoadMoreButtonClick} type="submit">
            Load More
        </button>
    );


};

export default Button;