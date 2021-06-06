import { memo } from 'react'
import './BoxHeader.scss'
import { MdEdit } from 'react-icons/md'

const BoxHeader = ({ children, onHeaderClick, editable }) => {

  return (
    <header className="box-header">
      <div 
        className={`header-content ${editable ? 'editable' : ''}`}
        onClick={editable ? onHeaderClick : undefined}>
        <h2>{children}</h2>
        { editable && 
          <div className="edit-icon">
            <MdEdit size={'100%'} />
          </div>
        }
      </div>
    </header>
  )
}

export default memo(BoxHeader)
