import { IProject } from '../interfaces';
import Project from '../components/project';
import { ActionIcon, Group, SimpleGrid, Title } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';

const Projects = ({ projects }: { projects: IProject[] }) => (
  <>
    <Group justify="space-between">
      <Title order={2} mt="lg" mb="xs">
        Projects
      </Title>
      <ActionIcon
        variant="subtle"
        size="xl"
        radius="md"
        aria-label="More Project"
        color="gray"
        component="a"
        href="https://github.com/Xavier2p?tab=repositories"
      >
        <IconArrowUpRight style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    </Group>
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
      m="md"
    >
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </SimpleGrid>
  </>
);

export default Projects;
