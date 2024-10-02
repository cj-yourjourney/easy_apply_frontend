// src/utils/hooks/useFormArray.ts

import { useState } from 'react'

type FormItem = Record<string, any> // Generic type for form items

const useFormArray = <T extends FormItem>(initialItem: T) => {
  const [formArray, setFormArray] = useState<T[]>([initialItem])

  // Cleaned up the handleItemChange function
  const handleItemChange = (index: number, field: string, value: any) => {
    setFormArray((prevArray) => {
      const updatedItems = [...prevArray] // Create a copy of the array
      updatedItems[index] = {
        ...updatedItems[index], // Update the specific item in the array immutably
        [field]: value
      }
      return updatedItems // Return the updated array
    })
  }

  const handleAddItem = () => setFormArray([...formArray, { ...initialItem }]) // Adding a new item

  const handleRemoveItem = (index: number) => {
    setFormArray((prevArray) => prevArray.filter((_, i) => i !== index)) // Remove item by index
  }

  return {
    formArray,
    handleItemChange,
    handleAddItem,
    handleRemoveItem
  }
}

export default useFormArray
