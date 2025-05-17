import { TextField } from '@mui/material'
import React from 'react'

interface InputProps {
  id?: string;
  label: string
  validations?: any
  error?: boolean
  helperText?: string
  type?:"text" | "number" | "email" | "password" | "date" | "time" | "url" | "tel"
}

const Input = ({ id, label, validations, error, helperText,type="text" }: InputProps) => {
  return <TextField error={error} helperText={helperText} id={id} label={label} variant="standard" {...validations} type={type} />
}

export default Input