import React from 'react'
import { Card } from 'react-bootstrap'

interface ProfileHeaderProps {
  profile: {
    first_name: string
    last_name: string
    phone: string
  }
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
