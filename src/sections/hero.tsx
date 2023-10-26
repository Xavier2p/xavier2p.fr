import { Code, Text, Title } from '@mantine/core';
import cnf from '../config';
import SocialGroup from '../components/social';

const Hero = () => (
  <>
    <Title order={1} mt="lg" mb="xs">
      Hey, I'm Xavier2p!
    </Title>
    <Text size="lg" mt="xs" mb="lg">
      I'm a French student in computer science at EPITA and I work as DevOps at <Code>COMPANY_NAME</Code>.
    </Text>
    <SocialGroup socials={cnf.socials} />
  </>
);

export default Hero;
