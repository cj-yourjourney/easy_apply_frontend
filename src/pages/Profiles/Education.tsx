// src/pages/Education.tsx
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import EducationForm from '../../components/Forms/Profiles/EducationForm'
import FormContainer from '../../components/Forms/FormContainer'
import StatusDisplay from '../../components/Common/StatusDisplay'
import CustomButton from '../../components/Common/Button'
import { createUserEducations } from '../../store/educations/educationThunks'
import useFormArray from '../../utils/hooks/useFormArray'
import { initialEducation } from '../../components/Forms/Profiles/EducationForm'
import { formatEducationsData } from '../../utils/profile/educationUtils'
import { debounce } from 'lodash'

const EducationPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const educationState = useSelector(
    (state: RootState) => state.educationCreate
  )

  const {
    formArray: educations,
    handleItemChange,
    handleAddItem,
    handleRemoveItem
  } = useFormArray(initialEducation)

  const debouncedSubmit = useCallback(
    debounce((formattedEducations) => {
      dispatch(createUserEducations({ educations: formattedEducations }))
    }, 500),
    [dispatch]
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formattedEducations = formatEducationsData(educations)
      debouncedSubmit(formattedEducations)
    },
    [educations, debouncedSubmit]
  )

  return (
    <FormContainer>
      <h1>User Education</h1>
      <StatusDisplay
        loading={educationState.loading}
        error={educationState.error}
        successMessage={
          educationState.educations?.length
            ? 'Education saved successfully!'
            : undefined
        }
      />
      <form onSubmit={handleSubmit}>
        {educations.map((education, index) => (
          <EducationForm
            key={index}
            education={education}
            onChange={(e) =>
              handleItemChange(index, e.target.name, e.target.value)
            }
            onRemove={() => handleRemoveItem(index)}
          />
        ))}

        <CustomButton type="button" onClick={handleAddItem}>
          Add Another Education
        </CustomButton>

        <CustomButton type="submit">Submit Education</CustomButton>
      </form>
    </FormContainer>
  )
}

export default EducationPage
