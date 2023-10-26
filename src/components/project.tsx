import { Badge, Button, Card, Center, Grid, Group, Image, Text, Title, rem } from '@mantine/core';
import { IProject } from '../config';
import { IconBook, IconCode, IconHash, IconWorldCheck } from '@tabler/icons-react';

const Links = ({ project }: { project: IProject }) => (
  <Group justify="flex-end" gap="xs" m="xs">
    {project.code && (
      <Button component="a" href={project.code} variant="light" px="xs">
        <IconCode />
      </Button>
    )}
    {project.docs && (
      <Button component="a" href={project.docs} variant="light" px="xs">
        <IconBook />
      </Button>
    )}
    {project.deployment && (
      <Button component="a" href={project.deployment} variant="light" px="xs">
        <IconWorldCheck />
      </Button>
    )}
  </Group>
);

// const Tags = ({ tags }: { tags: string[] }) => (
//   <Group justify="center" mb="sm">
//     {tags.map((tag) => (
//       <Badge
//         key={tag}
//         color="blue"
//         variant="light"
//         leftSection={<IconHash style={{ width: rem(12), height: rem(12) }} />}
//         mt="xs"
//       >
//         {tag}
//       </Badge>
//     ))}
//   </Group>
// );

const Project = ({ project }: { project: IProject }) => (
  <Card shadow="sm" padding="sm" radius="md" withBorder>
    <Card.Section>
      <Title order={3} mx="md" my="xs">
        {project.name}
      </Title>
    </Card.Section>
    {/* <Tags tags={project.tags} /> */}
    <Grid columns={4}>
      <Grid.Col span={1}>
        <Center>
          <Image src={project.logo} h={75} w="auto" />
        </Center>
      </Grid.Col>
      <Grid.Col span={3}>
        <Text>{project.description}</Text>
      </Grid.Col>
    </Grid>
    <Card.Section>
      <Links project={project} />
    </Card.Section>
  </Card>
);

export default Project;
