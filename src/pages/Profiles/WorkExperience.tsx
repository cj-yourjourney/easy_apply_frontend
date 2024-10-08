import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import WorkExperienceForm from '../../components/Forms/Profiles/WorkExperienceForm'
import FormContainer from '../../components/Forms/FormContainer'
import StatusDisplay from '../../components/Common/StatusDisplay'
import CustomButton from '../../components/Common/Button'
import { createWorkExperiences } from '../../store/workExperience/workExperienceThunks'
import useFormArray from '../../utils/hooks/useFormArray'
import { initialWorkExperience } from '../../components/Forms/Profiles/WorkExperienceForm'

const WorkExperience: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const workExperienceState = useSelector(
    (state: RootState) => state.workExperienceCreate
  )

  const {
    formArray: workExperiences,
    handleItemChange,
    handleAddItem,
    handleRemoveItem
  } = useFormArray(initialWorkExperience)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formattedExperiences = workExperiences.map((experience) => ({
      ...experience,
      start_year: Number(experience.start_year),
      end_year: experience.end_year ? Number(experience.end_year) : null // Ensure this is nullable
    }))

    console.log('formattedExperiences: ', {
      workExperiences: formattedExperiences
    })

    // Wrap formattedExperiences in an object
    dispatch(createWorkExperiences({ workExperiences: formattedExperiences }))
  }

  return (
    <FormContainer>
      <h1>Work Experiences</h1>
      <StatusDisplay
        loading={workExperienceState.loading}
        error={workExperienceState.error}
        successMessage={
          workExperienceState.workExperiences?.length
            ? 'Work Experiences saved successfully!'
            : undefined
        }
      />
      <form onSubmit={handleSubmit}>
        {workExperiences.map((experience, index) => (
          <WorkExperienceForm
            key={index}
            experience={experience}
            onChange={(e) =>
              handleItemChange(index, e.target.name, e.target.value)
            }
            onRemove={() => handleRemoveItem(index)}
          />
        ))}

        <CustomButton type="button" onClick={handleAddItem}>
          Add Another Experience
        </CustomButton>

        <CustomButton type="submit">Submit Work Experiences</CustomButton>
      </form>
    </FormContainer>
  )
}

export default WorkExperience
