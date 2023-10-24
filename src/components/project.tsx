import { Badge, Card } from '@mantine/core';
import { IProject } from '../config';

const Project = ({ project }: { project: IProject }) => (
  <Card shadow="sm" padding="sm" radius="md">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    {project.tags.map((tag) => (
      <Badge key={tag} color="blue">
        #{tag}
      </Badge>
    ))}
  </Card>
);

export default Project;
