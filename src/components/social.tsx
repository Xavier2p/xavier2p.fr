import { Button, Group, Tooltip } from '@mantine/core';
import { ISocial } from '../interfaces';

const SocialGroup = ({ socials }: { socials: ISocial[] }) => (
  <Group justify="flex-start" gap="xs" mb="xl">
    {socials.map((item) => (
      <Tooltip
        key={item.name}
        label={item.name}
        withArrow
        position="bottom"
        transitionProps={{ transition: 'skew-up', duration: 300 }}
        openDelay={300}
      >
        <Button component="a" href={item.url} variant="light" color="gray" px="x">
          <item.icon />
        </Button>
      </Tooltip>
    ))}
  </Group>
);

export default SocialGroup;
