import React from 'react'
import { Button, gridClasses } from "@mui/material"

export interface Buttontypes {
  title: string
  onclick?: () => void;
  classes?: string
  variant: 'contained' | 'outlined' | 'text'
  type?: 'button' | 'submit' | 'reset'
}

const CommonButton = ({ title, onclick = () => { }, classes = "", variant, type }: Buttontypes) => {
  return (
    <Button variant={variant} className={classes} onClick={onclick} type={type}>{title}</Button>
  )
}

export default CommonButton