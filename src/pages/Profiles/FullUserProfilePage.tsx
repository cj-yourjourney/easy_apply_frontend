import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { fetchUserFullProfile } from '../../store/fullUserProfiles/fullUserProfileThunks'
import StatusDisplay from '../../components/Common/StatusDisplay'
import ProfileHeader from '../../components/ProfileDetails/ProfileHeader'
import SkillsList from '../../components/ProfileDetails/SkillsList'
import WorkExperienceList from '../../components/ProfileDetails/WorkExperienceList'
import EducationList from '../../components/ProfileDetails/EducationList'
import { Container } from 'react-bootstrap'

const UserProfilePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  // Access user and profile states from Redux store
  const { user } = useSelector((state: RootState) => state.userLogin)
  const { profile, loading, error } = useSelector(
    (state: RootState) => state.fullUserProfileDetails
  )

  // Fetch user profile on component mount
  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchUserFullProfile(user.id))
    }
  }, [dispatch, user])

  return (
    <Container className="my-4">
      <StatusDisplay loading={loading} error={error} />
      {profile && (
        <>
          <ProfileHeader profile={profile} />
          <SkillsList skills={profile.skills} />
          <WorkExperienceList workExperiences={profile.work_experiences} />
          <EducationList educations={profile.educations} />
        </>
      )}
    </Container>
  )
}

export default UserProfilePage
