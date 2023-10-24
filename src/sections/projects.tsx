import { IProject } from '../config';
import Project from '../components/project';

const Projects = ({ projects }: { projects: IProject[] }) => (
  <>
    {projects.map((project) => (
      <Project key={project.name} project={project} />
    ))}
  </>
);

export default Projects;
