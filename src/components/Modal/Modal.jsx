import { Component } from "react";
import style from "./Modal.module.css";
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() { };
    componentDidUpdate() { };
    render() {
        return createPortal(
            <div className={style.Overlay}>
                <div className={style.Modal}>{this.props.children}
                    <img
                        src="https://pixabay.com/get/g311d89180ad0c0f4a946ed5cb0b5dc8edd262aaffdef4c065367e070e08c1b2b372e6f697d434a799f7b6b4d59e2855ad275949423a86d62d18f395c7e97b29a_1280.jpg"
                        alt="" />
                </div>
            </div >,
            modalRoot,
        );
    }
}
export default Modal;