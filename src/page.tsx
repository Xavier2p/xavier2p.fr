import Projects from './sections/projects';
import Hero from './sections/hero';
import cnf from './config';
import { Anchor, Center, Container, Text } from '@mantine/core';
import GoToUp from './components/affix';

const Xavier2pfr = () => (
  <Container>
    <GoToUp />
    <Hero />
    <Projects projects={cnf.projects} />
    <Center>
      <Text c="dimmed" ta="center">
        ---
        <br />
        <Anchor href="https://github.com/xavier2p/" c="dimmed">
          @Xavier2p
        </Anchor>{' '}
        {new Date().getFullYear()}
        <br />
        All rights reserved.
        <br />
        <Anchor href="mailto:contact@xavier2p.fr" c="dimmed">
          contact[at]xavier2p.fr
        </Anchor>
      </Text>
    </Center>
  </Container>
);

export default Xavier2pfr;
