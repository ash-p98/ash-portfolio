import React from 'react'
import './Button.scss'
const Button = ({link, text, style}) => {
  return (
    <a className={style} href={link}>{text}</a>
  )
}

export default Button