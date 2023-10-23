import { Button, Title } from '@mantine/core';
import { ISocial } from '../config';

const SocialGroup = ({ socials }: { socials: ISocial[] }) => (
  <>
    <Title order={3}>Socials</Title>
    {socials.map((item) => (
      <Social key={item.name} item={item} />
    ))}
  </>
);

const Social = ({ item }: { item: ISocial }) => (
  <Button leftSection={<item.icon />} component="a" href={item.url} variant="light" color="gray" mx="sm">
    {item.name}
  </Button>
);

export default SocialGroup;
