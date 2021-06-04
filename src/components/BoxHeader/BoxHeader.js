import { memo } from 'react'
import './BoxHeader.scss'
import { MdEdit } from 'react-icons/md'

const BoxHeader = ({ title, onHeaderClick }) => {

  return (
    <header className="box-header">
      <div 
        className="header-content"
        onClick={onHeaderClick}>
        <h2>{title}</h2>
        <div className="edit-icon">
          <MdEdit size={'100%'} />
        </div>
      </div>
    </header>
  )
}

export default memo(BoxHeader)
