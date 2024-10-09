import React from 'react'
import { Card } from 'react-bootstrap'
import { Profile } from '../../types/profileTypes'

interface ProfileHeaderProps {
  profile: Profile
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const { first_name, last_name, phone } = profile

  return (
    <Card className="mb-3 p-3">
      <h2>{`${first_name} ${last_name}`}</h2>
      <p>Phone: {phone}</p>
    </Card>
  )
}

export default ProfileHeader
