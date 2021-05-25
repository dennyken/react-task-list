import { memo } from 'react'
import './BoxHeader.scss'
import { MdEdit } from 'react-icons/md'

const BoxHeader = ({ title }) => {
  const handleHeaderClick = () => {
    console.log('BoxHeader:onClick')
  }

  return (
    <header className="box-header">
      <div 
        className="header-content"
        onClick={handleHeaderClick}>
        <h2>{title}</h2>
        <div className="edit-icon">
          <MdEdit size={'100%'} />
        </div>
      </div>
    </header>
  )
}

export default memo(BoxHeader)
