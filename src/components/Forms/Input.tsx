// src/components/forms/Input.tsx

import React from 'react'
import { Form } from 'react-bootstrap'

interface InputProps {
  id: string
  name: string
  type: string
  label: string
  value: string | number // Changed value type to handle both string and number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  required
}) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        id={id}
        name={name}
        value={value} // Handle both string and number values
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </Form.Group>
  )
}

export default Input
