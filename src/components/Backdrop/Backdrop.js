import './Backdrop.scss'

const Backdrop = ({ onBackdropClick }) => {
  return (
    <div className="backdrop" onClick={onBackdropClick}></div>
  )
}

export default Backdrop
