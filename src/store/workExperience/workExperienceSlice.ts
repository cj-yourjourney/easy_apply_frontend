// src/store/workExperience/workExperienceSlice.ts
import createGenericSlice from '../../utils/redux/SliceUtils'
import {
  workExperienceInitialState,
  WorkExperienceState,
  WorkExperienceResponse,
  WorkExperiencePayload
} from '../../types/workExperienceTypes'
import { createWorkExperiences } from './workExperienceThunks'

export const workExperienceSlice = createGenericSlice<
  WorkExperienceState,
  WorkExperienceResponse,
  WorkExperiencePayload 
>({
  name: 'workExperiences',
  initialState: workExperienceInitialState,
  thunk: createWorkExperiences
})
