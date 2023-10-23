import { Text } from '@mantine/core';
import cnf from '../config';
import SocialGroup from '../components/social';

const Hero = () => (
  <>
    <Text>Hero</Text>
    <SocialGroup socials={cnf.socials} />
  </>
);

export default Hero;
