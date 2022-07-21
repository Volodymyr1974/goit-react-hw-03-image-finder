import { Component } from "react";
import style from "./Modal.module.css";
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount = () => {

    };
    componentDidUpdate() { };

    onCloseModal = e => {
        if (e.currentTarget === e.target) {
            this.props.onCloseModal()
        }

    }
    render() {
        return createPortal(
            <div
                onClick={this.onCloseModal}
                className={style.Overlay}>
                <div className={style.Modal}>
                    <img
                        src={this.props.largeImageURL}
                        alt={this.props.tags} />
                </div>
            </div >,
            modalRoot,
        );
    }
}
export default Modal;