import React from 'react'
import { Card } from 'react-bootstrap'

interface SkillsListProps {
  skills: { name: string }[]
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <Card className="mb-3 p-3">
      <h3>Skills</h3>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}
    </Card>
  )
}

export default SkillsList
