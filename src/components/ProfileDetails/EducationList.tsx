import React from 'react'
import { Card } from 'react-bootstrap'
import { Education } from '../../types/educationTypes'
interface EducationListProps {
  educations: Education[]
}

const EducationList: React.FC<EducationListProps> = ({ educations }) => {
  return (
    <Card className="mb-3 p-3">
      <h3>Education</h3>
      {educations.length > 0 ? (
        <ul>
          {educations.map((edu, index) => (
            <li key={index}>
              {edu.degree} from {edu.school_name} ({edu.start_year} -{' '}
              {edu.end_year ?? 'Present'})
            </li>
          ))}
        </ul>
      ) : (
        <p>No education details added yet.</p>
      )}
    </Card>
  )
}

export default EducationList
