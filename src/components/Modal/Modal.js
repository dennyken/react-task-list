import Backdrop from '../Backdrop'
import './Modal.scss'

const Modal = ({children, onBackdropClick}) => {
  return (
    <div className="overlay">
      <Backdrop onBackdropClick={onBackdropClick} />
      <div className="modal">
        {children}
      </div>
    </div>
  )
}

export default Modal
