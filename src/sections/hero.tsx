import { Alert, Anchor, Text, Title } from '@mantine/core';
import cnf from '../config';
import SocialGroup from '../components/social';
import { IconAlertTriangle } from '@tabler/icons-react';

const Hero = () => (
  <>
    <Title order={1} mt="lg" mb="xs">
      Hey, I'm Xavier2p!
    </Title>
    <Text size="lg" mt="xs" mb="lg">
      Homelaber, NixOS fanboy, Tech enthusiast and maybe Hacker
    </Text>
    <Text size="lg" mt="xs" mb="lg">
      I'm a studying at EPITA and I work as IT Manager at{' '}
      <Anchor href="https://cartesian-lab.com">Cartesian Lab</Anchor>.
    </Text>
    <SocialGroup socials={cnf.socials} />
    <Alert variant="light" color="yellow" radius="md" title="Warning" icon={<IconAlertTriangle />}>
      This website is still under construction, some information may be missing or incomplete.
    </Alert>
  </>
);

export default Hero;
