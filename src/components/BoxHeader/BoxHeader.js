import { memo } from 'react'
import './BoxHeader.scss'

const BoxHeader = ({ title }) => {
  return (
    <header className="box-header">
      <h2>{title}</h2>
    </header>
  )
}

export default memo(BoxHeader)
