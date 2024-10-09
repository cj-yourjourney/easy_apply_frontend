import React from 'react'
import { Card } from 'react-bootstrap'
import { WorkExperience } from '../../types/workExperienceTypes'

interface WorkExperienceListProps {
  workExperiences: WorkExperience[]
}

const WorkExperienceList: React.FC<WorkExperienceListProps> = ({
  workExperiences
}) => {
  return (
    <Card className="mb-3 p-3">
      <h3>Work Experiences</h3>
      {workExperiences.length > 0 ? (
        <ul>
          {workExperiences.map((exp, index) => (
            <li key={index}>
              {exp.job_title} at {exp.company_name} ({exp.start_year} -{' '}
              {exp.end_year ?? 'Present'})<p>{exp.job_description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No work experiences added yet.</p>
      )}
    </Card>
  )
}

export default WorkExperienceList
