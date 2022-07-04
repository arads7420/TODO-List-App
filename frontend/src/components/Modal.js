import { IoClose } from 'react-icons/io5'

export const Modal = ({ closeModal, component, title }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="modalHeader">
                    <div className="title">{title}</div>
                    <div>
                        <button className="close" onClick={() => { closeModal() }}>
                            <IoClose />
                        </button>
                    </div>
                </div>
                <div className="body">
                    {component}
                </div>
            </div>
        </div>
    )
}