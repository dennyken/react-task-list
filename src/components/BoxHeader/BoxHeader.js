import { memo } from 'react'
import './BoxHeader.scss'
import { MdEdit } from 'react-icons/md'

const BoxHeader = ({ title }) => {
  return (
    <header className="box-header">
      <h2>{title}</h2>
      <div>
        <MdEdit size={'100%'} />
      </div>
    </header>
  )
}

export default memo(BoxHeader)
