import { useState } from 'react'

type FormItem = Record<string, any> // Generic type to represent any form item

const useFormArray = <T extends FormItem>(initialItem: T) => {
  const [formArray, setFormArray] = useState<T[]>([initialItem])

  const handleItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...formArray]
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    }
    setFormArray(updatedItems)
  }

  const handleAddItem = () => {
    setFormArray([...formArray, { ...initialItem }])
  }

  const handleRemoveItem = (index: number) => {
    setFormArray(formArray.filter((_, i) => i !== index))
  }

  return {
    formArray,
    handleItemChange,
    handleAddItem,
    handleRemoveItem
  }
}

export default useFormArray
