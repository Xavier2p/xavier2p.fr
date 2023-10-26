import { Button, Group, Title } from '@mantine/core';
import { ISocial } from '../config';

const SocialGroup = ({ socials }: { socials: ISocial[] }) => (
  <>
    <Title order={4}>You can reach me at:</Title>
    <Group justify="flex-start" gap="xs">
      {socials.map((item) => (
        <Button key={item.name} component="a" href={item.url} variant="light" color="gray" px="x">
          <item.icon />
        </Button>
      ))}
    </Group>
  </>
);

export default SocialGroup;
